import { Row } from 'components/row';
import React from 'react';
import {
    Image,
    Pressable,
  StyleSheet,
  View,
} from 'react-native';
import LogoSvg from 'assets/svgs/Logo.svg'
import BellSvg from 'assets/svgs/Bell.svg'
import SearchSvg from 'assets/svgs/Search.svg'
import { images } from 'assets/images';

type Props = {

}

export const HomeHeaderComponent = (props:Props) => {
  return (
    <Row containerStyle={{paddingHorizontal:20,alignItems:'center',justifyContent:'space-between'}}>
          <LogoSvg />
          <Row containerStyle={{alignItems:'center'}}>
              <Pressable>
                  <BellSvg />
              </Pressable>
              <Pressable style={{paddingHorizontal:18}}>
                  <SearchSvg />
              </Pressable>
              <Pressable>
                  <Image style={{width:30,height:30,borderRadius:30}} source={images.defaultAvatar}/>
              </Pressable>
          </Row>
    </Row>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});