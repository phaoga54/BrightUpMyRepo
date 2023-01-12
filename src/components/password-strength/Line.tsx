import React from 'react';
import {
    Dimensions,
  StyleSheet,
  View,
} from 'react-native';
const { width } = Dimensions.get('window')
const MARGIN = 5
const DEFAULT_WIDTH = (width-40 -MARGIN*4)/5
type Props = {
    width?: number
    isActive:boolean
}

export const LineComponent = ({ width = DEFAULT_WIDTH,isActive }: Props) => {
  return (
      <View style={[styles.container, { width,backgroundColor:isActive?'#C400C4':"#D9D9D9" }]} />
  );
};

const styles = StyleSheet.create({
  container:{
    height:4,backgroundColor:'#C400C4',
    borderRadius:10
  }
});