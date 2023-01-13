import { images } from 'assets/images';
import { montserrat, poppins } from 'const/theme';
import React from 'react';
import { Image, Pressable, StyleProp, Text, useWindowDimensions, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {
  StyleSheet,
  View,
} from 'react-native';

type Props = {
  containerStyle?: StyleProp<ViewStyle> 
  onPress: () => void
  hasAds?: boolean
}

export const VideoThumbnailComponent = React.memo(({ containerStyle, onPress }: Props) => {
  const { width, height } = useWindowDimensions()
  return (
    <Pressable>
      <View>
        <Image style={{ width: width, height: width / 1.8, marginTop: 10 }} source={images.thumbnail1} />

        <View style={[styles.adsContainer,{right:25,top:18}]}>
          <Text style={styles.textAds}>Ads</Text>
        </View>
        <View style={[styles.adsContainer, { backgroundColor: 'black' }, { left: 25, bottom: 18 }]}>
          <Text style={styles.textAds}>10:20</Text>
        </View>
      </View>
      <View>
        <View style={{ width: width, height: 7, backgroundColor: '#DDDDDD' }} />
        <View style={{ position: 'absolute', height: 7, width: width, backgroundColor: '#C400C4', left: -300 }} />
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  textAds:{ color: 'white', fontFamily: montserrat.regular, fontSize: 12 },
  adsContainer:{
    justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    paddingVertical: 6, paddingHorizontal: 12,backgroundColor:'#F2C94C',
    position:'absolute'
  },
  titleStyle: { fontFamily: poppins.semiBold, fontSize: 14, color: 'white' },
  container: {
    width: '100%',
    backgroundColor: '#C400C4',
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 32,
    marginTop: 20
  }
});