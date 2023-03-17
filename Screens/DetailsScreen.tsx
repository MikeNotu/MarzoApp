import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../utils/hooks';
import {COLORS, NavigationParam} from '../utils/constants';
import {CustomText} from '../components/CustomText';

export const DetailsScreen = (): JSX.Element => {
  type ItemProps = {
    createdAt: string;
    product: string;
    points: number;
    image: string;
    is_redemption: boolean;
    id: number;
  };

  const navigation = useNavigation<NavigationParam>();

  const {movimiento} = useAppSelector(state => state.userReducer);

  const [state, setState] = useState<ItemProps>({
    createdAt: '',
    product: '',
    points: 0,
    image: ',',
    is_redemption: false,
    id: 0,
  });

  useEffect(() => {
    setState(movimiento);
  }, [movimiento]);

  return (
    <View>
      <View>
        <CustomText
          content={'product' in state ? state.product : ''}
          size={24}
          color={COLORS.TRUE_BLACK}
          weight="800"
          marginTop={60}
          marginLeft={20}
        />
      </View>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: String('product' in state ? state.image : ''),
          }}
        />
      </View>
      <CustomText
        content={'Detalles de producto:'}
        marginTop={32}
        marginLeft={20}
        color={COLORS.GRAY}
        weight="800"
        size={14}
      />
      <CustomText
        content={'Comprado el'}
        marginTop={20}
        marginLeft={20}
        color={COLORS.TRUE_BLACK}
        weight="800"
        size={16}
      />
      <CustomText
        content={'Con esta compra acumulaste:'}
        marginTop={20}
        marginLeft={20}
        color={COLORS.GRAY}
        weight="800"
        size={14}
      />
      <CustomText
        content={'product' in state ? `${String(state.points)} puntos` : ''}
        marginTop={20}
        marginLeft={20}
        color={COLORS.TRUE_BLACK}
        weight="800"
        size={24}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.longButton}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <CustomText
            content={'Aceptar'}
            size={16}
            weight={'800'}
            color={COLORS.WHITE}
            alignSelf={'center'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 147,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  longButton: {
    height: 50,
    width: 353,
    alignSelf: 'center',
    backgroundColor: COLORS.BLUE,
    justifyContent: 'center',
    borderRadius: 10,
  },
  image: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});
