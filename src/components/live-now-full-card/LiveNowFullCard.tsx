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
import { LiveNowType } from 'types';
import RadarSvg from 'assets/svgs/Radar.svg'

const { width } = Dimensions.get('window')
const IMAGE_WIDTH = width
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.517
// 
type Props = {
    item: LiveNowType
}

export const LiveNowFullCard = React.memo(({ item }: Props) => {
    const { imageUrl, avatar, name, title, views } = item


    return (
        <View style={{ overflow: 'hidden' }}>
            <View>

                <Image style={styles.container}
                    source={{ uri: imageUrl }}
                />
                <View style={[styles.adsContainer, { right: 25, top: 18,paddingVertical:3,paddingHorizontal:6 }]}>
                    <RadarSvg />
                    <Text style={[styles.textAds,{marginLeft:4}]}>Live</Text>
                </View>
                <View style={[styles.adsContainer, { backgroundColor: 'black' }, { left: 25, bottom: 18 }]}>
                    <Text style={styles.textAds}>10:20</Text>
                </View>
            </View>

            <View>
                <View style={styles.grayLine} />
                <View style={[styles.purpleLine, { left: -300 }]} />
            </View>
            <View style={styles.contentContainer}>

                <Text style={styles.titleStyle}>{title}</Text>
                <Row containerStyle={{ alignItems: 'center' }}>
                    <Image style={styles.avatar} source={{ uri: avatar }} />
                    <Text style={styles.descriptionText}>{name} | {views}k views</Text>
                </Row>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    descriptionText: { fontFamily: montserrat.regular, fontSize: 12, marginLeft: 5, color: '#959595' },
    contentContainer: { marginVertical: 15, backgroundColor: 'white', paddingHorizontal: 20 },
    purpleLine: { position: 'absolute', height: 7, width: width, backgroundColor: '#C400C4' },
    grayLine: { width: width, height: 7, backgroundColor: '#DDDDDD' },
    titleStyle: { fontFamily: montserrat.medium, fontSize: 14, marginBottom: 10 },
    avatar: { width: 24, height: 24, borderRadius: 24 },
    textAds: { color: 'white', fontFamily: montserrat.regular, fontSize: 12 },
    adsContainer: {
        justifyContent: 'center', alignItems: 'center', borderRadius: 5,
        paddingVertical: 6, paddingHorizontal: 12, backgroundColor: '#EB5757',
        position: 'absolute', flexDirection: 'row'
    },

    container: {
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        padding: 20,
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    }
});