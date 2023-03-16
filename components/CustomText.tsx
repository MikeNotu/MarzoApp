import React from 'react';
import {Text, StyleSheet, ColorValue} from 'react-native';
import {COLORS} from '../utils/constants';

interface ComponentText {
  content: String;
  size: number;
  weight: '400' | '800';
  color: ColorValue;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  top?: number | 'auto';
  display?: string;
  position?: 'relative' | 'absolute';
  alignSelf?:
    | 'auto'
    | 'baseline'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch';
  justifyContent?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  is_redemption?: boolean;
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
  position,
  alignSelf,
  justifyContent,
  top,
  is_redemption,
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
      position: position,
      alignSelf: alignSelf !== undefined ? alignSelf : 'auto',
      justifyContent:
        justifyContent !== undefined ? justifyContent : 'flex-start',
      top: top !== undefined ? top : 'auto',
    },
    positive: {
      color: COLORS.GREEN,
    },
    negative: {
      color: COLORS.RED,
    },
  });

  return (
    <Text style={styles.customFont}>
      {is_redemption === true ? (
        <Text style={styles.negative}>-</Text>
      ) : is_redemption === false ? (
        <Text style={styles.positive}>+</Text>
      ) : null}
      {content}
    </Text>
  );
};
