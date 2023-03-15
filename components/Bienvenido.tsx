import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../utils/constants';
import {CustomText} from './CustomText';
interface PersonData {
  firstName: String;
  lastName: String;
}

export const Bienvenido = ({firstName, lastName}: PersonData): JSX.Element => {
  return (
    <View>
      <View style={styles.container}>
        <CustomText
          content={'Bienvenido de vuelta!'}
          size={20}
          weight={'800'}
          color={COLORS.BLACK}
        />
        <CustomText
          content={`${firstName} ${lastName}`}
          size={16}
          weight={'400'}
          color={COLORS.BLACK}
          marginTop={-5}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 1,
    marginLeft: 20,
    marginTop: 24,
    width: 209,
    height: 48,
  },
});
