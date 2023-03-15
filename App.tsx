import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {AboutScreen} from './screens/AboutScreen';
import {Provider} from 'react-redux';
import {Store} from './redux/store';

function App(): JSX.Element {
  type RootStackParamList = {
    Home: object;
    About: object;
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
