import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = (): JSX.Element => {
  type NavigationParam = {
    navigate: (route: string) => void;
  };

  const navigation = useNavigation<NavigationParam>();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};
