import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import {getImage} from '../services/Images';
import {getProducts} from '../services/Products';
import {COLORS, months} from '../utils/constants';
import {CustomText} from './CustomText';

export const Movimientos = (): JSX.Element => {
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
    // let final: ItemProps[];
    // (async () => {
    //   const response = getProducts();
    //   //   setProducts(await response);
    //   final = await response;
    //   console.log('final>>final');
    //   console.log(final);
    // })();

    // if((response.ok){

    // })

    // setProducts(final);
    getProducts().then(res => {
      let newRes = res;
      newRes.length = 50;
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
    });
  }, []);

  const Item = ({
    createdAt,
    product,
    points,
    image,
    is_redemption,
    id,
  }: ItemProps) => (
    <View
      style={{
        width: 333,
        height: 55,
        alignSelf: 'center',
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {/* <Image
        style={{height: 55, width: 55}}
        source={require('../media/Placeholder.png')}
      /> */}

      <Image
        style={{
          width: 55,
          height: 55,
        }}
        source={{
          uri: String(image),
        }}
      />

      <View
        style={{
          height: 55,
          width: 144,
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}>
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
      <View
        style={{
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
