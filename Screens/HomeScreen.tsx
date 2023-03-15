import React from 'react';
import {View} from 'react-native';
import {Bienvenido} from '../components/Bienvenido';
import {CustomText} from '../components/CustomText';
import {COLORS} from '../utils/constants';

export const HomeScreen = (): JSX.Element => {
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
    </View>
  );
};
