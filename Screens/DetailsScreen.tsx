import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {setAction} from '../redux/actions';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';

export const DetailsScreen = (): JSX.Element => {
  type NavigationParam = {
    navigate: (route: string) => void;
  };

  const navigation = useNavigation<NavigationParam>();

  const {action} = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="Canjeados"
        onPress={() => {
          dispatch(setAction('Canjeados') as never);
        }}
      />
      <Button
        title="Ganados"
        onPress={() => {
          dispatch(setAction('Ganados') as never);
        }}
      />
      <Button
        title="Todos"
        onPress={() => {
          dispatch(setAction('Todos') as never);
        }}
      />
      <Text>{action}</Text>
    </View>
  );
};
