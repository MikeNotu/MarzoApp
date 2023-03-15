import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getProducts} from '../Services/Products';

export const HomeScreen = (): JSX.Element => {
  type NavigationParam = {
    navigate: (route: string) => void;
  };

  const navigation = useNavigation<NavigationParam>();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = getProducts();
      setProducts(await response);
    })();
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
      <Text>{JSON.stringify(products)}</Text>
    </View>
  );
};
