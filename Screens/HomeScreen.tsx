import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Bienvenido} from '../components/Bienvenido';
import {CustomText} from '../components/CustomText';
import {Points} from '../components/Points';
import {getProducts} from '../services/Products';
import {COLORS} from '../utils/constants';

export const HomeScreen = (): JSX.Element => {
  const [products, setProducts] = useState([
    {
      createdAt: '',
      product: '',
      points: 0,
      image: 'String',
      is_redemption: false,
      id: 0,
    },
  ]);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    (async () => {
      const response = getProducts();
      setProducts(await response);
    })();
  }, []);

  useEffect(() => {
    if (
      products.length !== 0 &&
      'points' in products[0] &&
      'is_redemption' in products[0]
    ) {
      var total = products.reduce(
        (accum, item) =>
          item.is_redemption === false
            ? accum + item.points
            : accum - item.points,
        0,
      );
      setTotalPoints(total);
    }
  }, [products]);
  return (
    <View>
      <Bienvenido firstName="Ruben" lastName="Rodriguez" />
      <CustomText
        content={'TUS PUNTOS'}
        size={14}
        weight={'800'}
        color={COLORS.GRAY}
        marginTop={20}
        marginLeft={20}
      />
      <Points month={'Diciembre'} points={totalPoints} />
    </View>
  );
};
