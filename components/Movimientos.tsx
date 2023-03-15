import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  StatusBar,
  Text,
} from 'react-native';
import {getProducts} from '../services/Products';
import {COLORS} from '../utils/constants';
import {CustomText} from './CustomText';

export const Movimientos = (): JSX.Element => {
//   interface DataType {
//     createdAt: string;
//     product: string;
//     points: number;
//     image: string;
//     is_redemption: false;
//     id: 0;
//   }
  type ItemProps = {
    createdAt: string;
    product: string;
    points: number;
    image: string;
    is_redemption: boolean;
    id: number;
  };

  const [products, setProducts] = useState<Array<ItemProps>>([]);

  useEffect(() => {
    (async () => {
      const response = getProducts();
      setProducts(await response);
    })();
  }, []);

  // const Item = ({title}: ItemProps) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //   </View>
  // );

  const Item = ({points, is_redemption}: ItemProps) => (
    <View
      style={{
        width: 333,
        height: 55,
        alignSelf: 'center',
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Image
        style={{height: 55, width: 55}}
        source={require('../media/Placeholder.png')}
      />
      <View
        style={{
          height: 55,
          width: 144,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
        <CustomText
          content={String(points)}
          size={14}
          weight={'800'}
          color={COLORS.TRUE_BLACK}
        />
        <CustomText
          content={'26 de enero, 2019'}
          size={12}
          weight={'400'}
          color={COLORS.TRUE_BLACK}
        />
      </View>
      <View
        style={{
          // marginLeft: 11,
          height: 55,
          width: 80,
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}>
        <CustomText
          is_redemption={is_redemption}
          content={String(points)}
          size={16}
          weight={'800'}
          color={COLORS.TRUE_BLACK}
          alignSelf={'center'}
        />
      </View>
      <View
        style={{
          // marginLeft: 11,
          height: 55,
          width: 24,
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <Image
          style={{height: 12, width: 12, alignSelf: 'flex-end'}}
          source={require('../media/Arrow.png')}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView>
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
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
