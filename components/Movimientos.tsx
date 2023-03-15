import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {COLORS} from '../utils/constants';
import {CustomText} from './CustomText';

export const Movimientos = (): JSX.Element => {
  return (
    <View style={{marginTop: 35}}>
      <View
        style={{
          width: 333,
          height: 55,
          alignSelf: 'center',
          marginTop: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{height: 55, width: 55}}
          source={require('../media/Placeholder.png')}
        />
        <View
          style={{
            height: 55,
            width: 144,
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
          <CustomText
            content={'Nombre del producto'}
            size={14}
            weight={'800'}
            color={COLORS.TRUE_BLACK}
          />
          <CustomText
            content={'26 de enero, 2019'}
            size={12}
            weight={'400'}
            color={COLORS.TRUE_BLACK}
          />
        </View>
        <View
          style={{
            // marginLeft: 11,
            height: 55,
            width: 80,
            justifyContent: 'flex-end',
            flexDirection: 'row',
          }}>
          <CustomText
            content={'+100'}
            size={16}
            weight={'800'}
            color={COLORS.TRUE_BLACK}
            alignSelf={'center'}
          />
        </View>
        <View
          style={{
            // marginLeft: 11,
            height: 55,
            width: 24,
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <Image
            style={{height: 12, width: 12, alignSelf: 'flex-end'}}
            source={require('../media/Arrow.png')}
          />
        </View>
      </View>
      <View
        style={{
          width: 333,
          height: 55,
          alignSelf: 'center',
          marginTop: 8,
        }}></View>
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
