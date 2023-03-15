import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {Shadow} from 'react-native-shadow-2';
import {formatPoints} from '../utils/common';
import {COLORS, PossibleMonths} from '../utils/constants';
import {CustomText} from './CustomText';
import {Card} from 'react-native-shadow-cards';

interface ComponentData {
  month: PossibleMonths;
  points: number;
}

export const Points = ({month, points}: ComponentData): JSX.Element => {
  return (
    <Card style={styles.Block}>
      {/* <View style={styles.Element}> */}
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
      {/* </View> */}
    </Card>
  );
};

const styles = StyleSheet.create({
  Block: {
    backgroundColor: COLORS.BLUE,
    height: 143,
    width: 286,
    shadowColor: 'black',
    elevation: 12,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  Element: {
    backgroundColor: COLORS.BLUE,
    height: 143,
    width: 286,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
