import React from 'react';
import {Text, StyleSheet, ColorValue} from 'react-native';
// type CustomTextProps = {};

interface ComponentText {
  content: String;
  size: number;
  weight: '400' | '800';
  color: ColorValue;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

export const CustomText = ({
  content,
  size,
  weight,
  color,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}: ComponentText): JSX.Element => {
  const styles = StyleSheet.create({
    customFont: {
      fontFamily: 'Avenir',
      fontSize: size,
      fontWeight: weight,
      color: color,
      marginTop: marginTop !== undefined ? marginTop : 0,
      marginBottom: marginBottom !== undefined ? marginBottom : 0,
      marginLeft: marginLeft !== undefined ? marginLeft : 0,
      marginRight: marginRight !== undefined ? marginRight : 0,
    },
  });

  return <Text style={styles.customFont}>{content}</Text>;
};
