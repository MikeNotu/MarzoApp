import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {setName} from '../redux/actions';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';

export const HomeScreen = (): JSX.Element => {
  type NavigationParam = {
    navigate: (route: string) => void;
  };

  const navigation = useNavigation<NavigationParam>();

  const {name} = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="ChangeName"
        onPress={() => {
          const test: String = String(Date.now());
          dispatch(setName(test) as never);
        }}
      />
      <Text>{name}</Text>
    </View>
  );
};
