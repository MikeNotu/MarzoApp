import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../utils/hooks';

export const DetailsScreen = (): JSX.Element => {
  type NavigationParam = {
    navigate: (route: string) => void;
  };

  const navigation = useNavigation<NavigationParam>();

  const {product} = useAppSelector(state => state.userReducer);

  return (
    <View>
      <Text style={{fontSize: 120}}>{JSON.stringify(product)}</Text>
      <Button
      title='return'
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};
