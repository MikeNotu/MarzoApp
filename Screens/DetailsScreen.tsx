import React from 'react';
import {View} from 'react-native';
import {Bienvenido} from '../components/Bienvenido';

export const DetailsScreen = (): JSX.Element => {
  return (
    <View>
      <Bienvenido firstName="Ruben" lastName="Rodriguez" />
      {/* <View style={{backgroundColor: 'red', width: 394, height: 770}} /> */}
    </View>
  );
};
