import { Row } from 'components/row';
import { montserrat, poppins } from 'const/theme';
import React from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { LiveNowType } from 'types';
// 
type Props = {
    item: LiveNowType
}

export const LiveNowCardComponent = React.memo(({ item }: Props) => {
    const { imageUrl, avatar, name, title, views } = item
    return (
        <View style={{ borderRadius: 16, overflow: 'hidden' }}>
            <ImageBackground style={styles.container}
                source={{ uri: imageUrl }}
            >
                <Row containerStyle={{alignItems:'center'}}>
                    <Image style={styles.avatar} source={{ uri: avatar }} />
                    <Text style={styles.nameText} numberOfLines={1}>{name}</Text>
                </Row>
                <View>
                    <View style={styles.viewersContainer}>
                        <Text style={styles.viewerText}>{views} Viewers</Text>
                    </View>
                    <Text style={styles.titleText}>{title}</Text>
                </View>
            </ImageBackground>
        </View>
    );
});

const styles = StyleSheet.create({
    viewerText: { fontFamily: poppins.semiBold, fontSize: 9, color: 'white' },
    titleText: { fontFamily: montserrat.semiBold, fontSize: 13, color: 'white' },
    viewersContainer: { paddingHorizontal: 6, paddingVertical: 4, backgroundColor: '#C400C4', borderRadius: 45, alignSelf: 'flex-start' },
    avatar:{ width: 24, height: 24, borderRadius: 24 },
    nameText: { fontFamily: montserrat.medium, fontSize: 12, color: 'white' },
    container: {
        width: 165,
        height: 200,
        padding: 20,
        paddingHorizontal:15,
        justifyContent:'space-between'
    }
});