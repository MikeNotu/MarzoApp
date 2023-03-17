import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {setMovimiento} from '../redux/actions';
import {getImage} from '../services/Images';
import {getProducts} from '../services/Products';
import {ItemProps, NavigationParam} from '../utils/common';
import {COLORS, months} from '../utils/constants';
import {useAppDispatch, useAppSelector} from '../utils/hooks';
import {CustomText} from './CustomText';

export const Movimientos = (): JSX.Element => {
  const [products, setProducts] = useState<Array<ItemProps>>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const navigation = useNavigation<NavigationParam>();
  const {action} = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    getProducts().then(res => {
      let newRes = res;
      newRes.length = 50;

      if (action === 'Canjeados') {
        let filteredRes: ItemProps[] = [];
        for (let i = 0; i < newRes.length; i++) {
          if (newRes[i].is_redemption === true) {
            filteredRes = [...filteredRes, newRes[i]];
          }
        }
        newRes = filteredRes;
      }

      if (action === 'Ganados') {
        let filteredRes: ItemProps[] = [];
        for (let i = 0; i < newRes.length; i++) {
          if (newRes[i].is_redemption === false) {
            filteredRes = [...filteredRes, newRes[i]];
          }
        }
        newRes = filteredRes;
      }
      for (let i = 0; i < newRes.length; i++) {
        getImage(newRes[i].image).then(resp => {
          if (resp !== null) {
            newRes[i].image = resp.url;
          }
        });

        const firstSplit = newRes[i].createdAt.split('-');
        const secondSplit = firstSplit[2].split('T');

        const mes = String(months[firstSplit[1]]);

        const fecha = `${secondSplit[0]} de ${mes}, ${firstSplit[0]}`;
        newRes[i].createdAt = fecha;
      }
      setProducts(newRes);
      setLoading(false);
    });
  }, [action]);

  const Item = ({
    createdAt,
    product,
    points,
    image,
    is_redemption,
    id,
  }: ItemProps) => (
    <TouchableOpacity
      style={styles.elemento}
      onPress={() => {
        dispatch(
          setMovimiento({
            createdAt,
            product,
            points,
            image,
            is_redemption,
            id,
          }),
        );
        navigation.navigate('Details');
      }}>
      <Image
        style={styles.image}
        source={{
          uri: String(image),
        }}
      />

      <View style={styles.description}>
        <CustomText
          content={String(product)}
          size={14}
          weight={'800'}
          color={COLORS.TRUE_BLACK}
        />
        <CustomText
          content={createdAt}
          size={12}
          weight={'400'}
          color={COLORS.TRUE_BLACK}
        />
      </View>
      <View style={styles.points}>
        <CustomText
          is_redemption={is_redemption}
          content={String(points)}
          size={16}
          weight={'800'}
          color={COLORS.TRUE_BLACK}
          alignSelf={'center'}
        />
      </View>
      <View style={styles.arrow}>
        <Image style={styles.icon} source={require('../media/Arrow.png')} />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size={150}
          color={
            action === 'Ganados'
              ? COLORS.GREEN
              : action === 'Canjeados'
              ? COLORS.RED
              : COLORS.TURQUOISE
          }
          style={styles.spinner}
        />
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => (
            <Item
              createdAt={item.createdAt}
              product={item.product}
              points={item.points}
              image={item.image}
              is_redemption={item.is_redemption}
              id={item.id}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 320,
  },
  elemento: {
    width: 333,
    height: 55,
    alignSelf: 'center',
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 55,
    height: 55,
  },
  description: {
    height: 55,
    width: 144,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  arrow: {
    height: 55,
    width: 24,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  icon: {
    height: 12,
    width: 12,
    alignSelf: 'flex-end',
  },
  spinner: {
    alignSelf: 'center',
    height: 320,
  },
  points: {
    height: 55,
    width: 80,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
