import { Row } from 'components/row';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ArrowRightSvg from 'assets/svgs/ArrowRight.svg'
import { poppins } from 'const/theme';
type Props = {
    title: string
}

export const SettingRowComponent = ({title}:Props) => {
  return (
    <Row containerStyle={{marginHorizontal:20,justifyContent:'space-between',paddingVertical:20}}>
          <Text style={{fontFamily:poppins.medium,fontSize:14,color:'#263238'}}>
            {title}
          </Text>
          <ArrowRightSvg />
    </Row>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});