import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Bienvenido} from '../components/Bienvenido';
import {CustomText} from '../components/CustomText';
import {Movimientos} from '../components/Movimientos';
import {Points} from '../components/Points';
import {setAction} from '../redux/actions';
import {getProducts} from '../services/Products';
import {COLORS} from '../utils/constants';
import {useAppDispatch, useAppSelector} from '../utils/hooks';

export const HomeScreen = (): JSX.Element => {
  const [products, setProducts] = useState([
    {
      createdAt: '',
      product: '',
      points: 0,
      image: '',
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

  const {action} = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

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
      <CustomText
        content={'TUS MOVIMIENTOS'}
        size={14}
        weight={'800'}
        color={COLORS.GRAY}
        marginTop={20}
        marginLeft={20}
      />
      <Movimientos />
      {action === 'Todos' ? (
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(setAction('Ganados') as never);
            }}>
            <CustomText
              content={'Ganados'}
              size={12}
              weight={'800'}
              color={COLORS.WHITE}
              alignSelf={'center'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(setAction('Canjeados') as never);
            }}>
            <CustomText
              content={'Canjeados'}
              size={12}
              weight={'800'}
              color={COLORS.WHITE}
              alignSelf={'center'}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.longButton}
            onPress={() => {
              dispatch(setAction('Todos') as never);
            }}>
            <CustomText
              content={'Todos'}
              size={16}
              weight={'800'}
              color={COLORS.WHITE}
              alignSelf={'center'}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 147,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    height: 50,
    width: 170,
    alignSelf: 'center',
    backgroundColor: COLORS.BLUE,
    justifyContent: 'center',
    borderRadius: 10,
  },
  longButton: {
    height: 50,
    width: 353,
    alignSelf: 'center',
    backgroundColor: COLORS.BLUE,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
