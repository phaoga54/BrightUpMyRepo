import { poppins } from 'const/theme';
import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  View,
} from 'react-native';

type Props = {
  containerStyle?: StyleProp<ViewStyle> 
  title: string
  onPress: () => void
}

export const ButtonComponent = ({ containerStyle, title,onPress }: Props) => {
  return (
    <TouchableOpacity 
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleStyle:{fontFamily:poppins.semiBold,fontSize:14,color:'white'},
  container:{
    width: '100%',
    backgroundColor:'#C400C4',
    paddingVertical:14,
    alignItems:'center',
    borderRadius:32,
    marginTop:20
  }
});