import { Row } from 'components/row';
import { montserrat, poppins } from 'const/theme';
import React from 'react';
import {
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { LiveNowType } from 'types';
import HamburgerSvg from 'assets/svgs/Hamburger.svg'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStack, CommonStack, HomeStack } from 'types/screens';

type Props = {
    item: LiveNowType
}

export const BrightCardComponent = React.memo(({ item }: Props) => {
    const { imageUrl, avatar, name, title, views } = item
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    
    const goToBright = ()=>{
        navigation.navigate(HomeStack.brightScreen)
    }
    return (
        <Pressable onPress={goToBright}>
            <View style={{ borderRadius: 16, overflow: 'hidden' }}>
                <ImageBackground style={styles.container}
                    source={{ uri: imageUrl }}
                >
                    <HamburgerSvg style={{ alignSelf: 'flex-end' }} />
                    <View>
                        <Text style={styles.titleText}>{title}</Text>
                        <View style={styles.viewersContainer}>
                            <Text style={styles.viewerText}>{views} Viewers</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </Pressable>
    );
});

const styles = StyleSheet.create({
    viewerText: { fontFamily: poppins.semiBold, fontSize: 9, color: 'white' },
    titleText: { fontFamily: montserrat.semiBold, fontSize: 13, color: 'white', marginBottom: 10 },
    viewersContainer: { paddingHorizontal: 6, paddingVertical: 4, backgroundColor: '#C400C4', borderRadius: 45, alignSelf: 'flex-start' },
    avatar: { width: 24, height: 24, borderRadius: 24 },
    nameText: { fontFamily: montserrat.medium, fontSize: 12, color: 'white' },
    container: {
        width: 165,
        height: 200,
        padding: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    }
});