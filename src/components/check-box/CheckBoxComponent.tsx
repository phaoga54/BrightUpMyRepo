import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

type Props = {

}

export const CheckBox = (props:Props) => {
  return (
    <View style={styles.container}>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width: 17, height: 20,borderRadius:3,borderWidth:1,borderColor:'#ECE9EC'
  }
});