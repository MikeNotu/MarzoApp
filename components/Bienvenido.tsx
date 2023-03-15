import React from 'react';
import {Text, View} from 'react-native';
interface PersonData {
  firstName: String;
  lastName: String;
}

export const Bienvenido = ({firstName, lastName}: PersonData): JSX.Element => {
  return (
    <View>
      <View
        style={{
          marginLeft: 20,
          marginTop: 24,
          backgroundColor: '#cc22ff',
          width: 209,
          height: 48,
        }}>
        <Text style={{fontFamily: 'Avenir'}}>name: {firstName}</Text>
        <Text>Herreee: {lastName}</Text>
      </View>
    </View>
  );
};
