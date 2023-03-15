import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {Shadow} from 'react-native-shadow-2';
import {formatPoints} from '../utils/common';
import {COLORS, PossibleMonths} from '../utils/constants';
import {CustomText} from './CustomText';

interface ComponentData {
  month: PossibleMonths;
  points: number;
}

export const Points = ({month, points}: ComponentData): JSX.Element => {
  return (
    <View style={styles.container}>
      <CustomText
        content={month}
        size={16}
        weight={'800'}
        color={COLORS.WHITE}
        marginTop={21}
        marginLeft={19}
        alignSelf="flex-start"
        position="absolute"
        top={0}
      />

      <CustomText
        content={`${formatPoints(points)} pts`}
        size={32}
        weight={'800'}
        color={COLORS.WHITE}
        alignSelf="center"
        position="absolute"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLUE,
    height: 143,
    width: 286,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowOffset: {width: 10, height: 10},
  },
});
