import { Row } from 'components/row';
import { montserrat } from 'const/theme';
import React from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { TrendingType } from 'types';

const { width } = Dimensions.get('window')
const IMAGE_WIDTH = width * 0.82
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.53

type Props = {
    item: TrendingType
}

export const TrendingCardComponent = ({ item }: Props) => {
    const { avatar, imageUrl, name, title, views } = item

    return (
        <View style={styles.container}>
            <View>
                <Image style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT, borderRadius: 16 }} source={{ uri: imageUrl }} />
                <View style={[styles.adsContainer, { backgroundColor: 'black' }, { left: 15, bottom: 18 }]}>
                    <Text style={styles.textAds}>10:20</Text>
                </View>
            </View>
            <Text style={{fontFamily:montserrat.medium,fontSize:14,marginVertical:10}}>{title}</Text>
            <Row containerStyle={{ alignItems: 'center' }}>
                <Image style={styles.avatar} source={{ uri: avatar }} />
                <Text style={{ fontFamily: montserrat.regular, fontSize: 12, marginLeft: 5, color: '#959595' }}>{name} | {views}k views</Text>
            </Row>
        </View>
    );
};

const styles = StyleSheet.create({
    avatar:{ width: 24, height: 24, borderRadius: 24 },
    textAds: { color: 'white', fontFamily: montserrat.regular, fontSize: 12 },
    adsContainer: {
        justifyContent: 'center', alignItems: 'center', borderRadius: 5,
        paddingVertical: 3, paddingHorizontal: 8, backgroundColor: '#F2C94C',
        position: 'absolute'
    },
    imageStyle: {

    },
    container: {
    }
});