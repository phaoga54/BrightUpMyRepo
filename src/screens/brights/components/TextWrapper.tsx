import { montserrat } from 'const/theme';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {
  text: string
}

export const TextWrapperComponent = ({ text }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: montserrat.medium,
    fontSize: 10,
    lineHeight: 12,
    color: 'white'
  },
  container: {
    paddingHorizontal:6, paddingVertical: 1,
    justifyContent: 'center', alignItems: 'center',
    marginTop: 7,
    borderRadius: 30,
    backgroundColor: '#3D3D3D',
    alignSelf:'center'
  }
});