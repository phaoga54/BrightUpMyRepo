import { poppins } from 'const/theme';
import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  View,
} from 'react-native';
import FacebookLogo from 'assets/svgs/FacebookLogo.svg'
import GoogleLogo from 'assets/svgs/GoogleLogo.svg'
import TwitterLogo from 'assets/svgs/TwitterLogo.svg'
import { Row } from 'components/row';

type Props = {
  containerStyle?: StyleProp<ViewStyle> 
  type: 'Facebook' | 'Google' | 'Twitter'
  onPress: () => void
}
const SOCIAL_TYPES ={
  'Facebook':{
    icon: <FacebookLogo />,
    title:'Facebook'
  },
  'Google':{
    icon: <GoogleLogo />,
    title:'Google'
  },
  'Twitter':{
    icon: <TwitterLogo />,
    title:'Twitter'
  }
}
export const SocialLoginButton = ({ containerStyle, type, onPress }: Props) => {
  return (
    <TouchableOpacity 
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Row containerStyle={{alignItems:'center'}}>
        {SOCIAL_TYPES[type].icon}
        <Text style={styles.titleStyle}>{SOCIAL_TYPES[type].title}</Text>
      </Row>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleStyle:{fontFamily:poppins.medium,fontSize:13,color:'#3D3D3D',marginLeft:7},
  container:{
    width: '100%',
    backgroundColor:'white',
    paddingVertical:14,
    alignItems:'center',
    borderRadius:32,
    marginTop:20,
    borderWidth:1,
    borderColor:'#B8B5C6'
  }
});