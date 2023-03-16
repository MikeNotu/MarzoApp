import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../utils/hooks';

export const DetailsScreen = (): JSX.Element => {
  type NavigationParam = {
    navigate: (route: string) => void;
  };

  const navigation = useNavigation<NavigationParam>();

  const {movimiento} = useAppSelector(state => state.userReducer);

  return (
    <View>
      <Text style={{fontSize: 12}}>{JSON.stringify(movimiento)}</Text>
      <Button
      title='return'
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};
