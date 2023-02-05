import { Row } from 'components/row';
import React from 'react';
import {
    Image,
    ImageBackground,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LeftArrow from 'assets/svgs/LeftArrow.svg'
import SearchSvg from 'assets/svgs/Search.svg'
import HamburgerSvg from 'assets/svgs/Hamburger.svg'


import CommentSvg from 'assets/svgs/Comment.svg'
import ShareSvg from 'assets/svgs/Share.svg'
import DislikeSvg from 'assets/svgs/Dislike.svg'
import LikeSvg from 'assets/svgs/Like.svg'
import { useNavigation } from '@react-navigation/native';
import { TextWrapperComponent } from './components/TextWrapper';
import { montserrat, poppins } from 'const/theme';

const FAKE_BRIGHT = {
    avatar: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/296786220_2439025969571080_2252975622957619417_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2E-QpppvisYAX_FCFNg&_nc_ht=scontent.fhan3-2.fna&oh=00_AfA_uDVde_b2kh3ezFPQsmSUuOjN6gD3qXq5mS5BBXeqHw&oe=63CEFD7C',
    name: 'Username',
    views: 25,
    title: 'My Go-To Eyeshadow Look',
    imageUrl: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80'
}

export const BrightsScreen = () => {
    const navigation = useNavigation()

    return (
        <ImageBackground
            style={styles.container}
            source={{ uri: FAKE_BRIGHT.imageUrl }}
        >
            <SafeAreaView style={[styles.container]}>
                <Row containerStyle={{ alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <Pressable onPress={navigation.goBack}><LeftArrow fill={'white'} /></Pressable>
                    <Row containerStyle={{ alignItems: 'center' }}>
                        <SearchSvg style={{ marginRight: 15 }} fill={'white'} />
                        <HamburgerSvg fill={'white'} />
                    </Row>
                </Row>
                <View style={{ flex: 1 }} />
                <Row containerStyle={{ paddingHorizontal: 20, alignItems: 'flex-end',paddingBottom:20 }}>
                    <View style={{ flex: 1 }}>

                        <View style={styles.viewersContainer}>
                            <Text style={styles.viewerText}>243k Viewers</Text>
                        </View>
                        <Text style={{
                            fontFamily: montserrat.semiBold, fontSize: 18,
                            lineHeight: 22, color: 'white', marginVertical: 10
                        }}>My Go-To Eyeshadow Look in Early 2023</Text>


                        <Row containerStyle={{ alignItems: 'center' }}>
                            <Image style={styles.avatar} source={{ uri: FAKE_BRIGHT.avatar }} />
                            <Text style={styles.descriptionText}>Jeremiah Selena </Text>
                            <TouchableOpacity style={styles.subscribeButton}>
                                <Text style={styles.subscribeText}>Subscribe</Text>
                            </TouchableOpacity>
                        </Row>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <LikeSvg />
                        <TextWrapperComponent text='87k' />
                        <View style={styles.seperator} />
                        <DislikeSvg />
                        <TextWrapperComponent text='5' />
                        <View style={styles.seperator} />
                        <ShareSvg />
                        <TextWrapperComponent text='Share' />
                        <View style={styles.seperator} />
                        <CommentSvg />
                        <TextWrapperComponent text='24' />
                    </View>
                </Row>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    subscribeText: { fontFamily: poppins.semiBold, fontSize: 9, lineHeight: 14, color: 'white' },
    subscribeButton:{
        paddingHorizontal: 6, paddingVertical: 4, borderRadius: 45,
        borderWidth: 1, borderColor: 'white',
        marginLeft:7
    },
    descriptionText: { fontFamily: montserrat.regular, fontSize: 12, marginLeft: 5, color: '#959595' },
    avatar: { width: 24, height: 24, borderRadius: 24 },
    viewerText: { fontFamily: poppins.semiBold, fontSize: 9, color: 'white' },
    viewersContainer: { paddingHorizontal: 6, paddingVertical: 4, backgroundColor: '#C400C4', borderRadius: 45, alignSelf: 'flex-start' },
    seperator: {
        height: 20
    },
    container: {
        flex: 1,
    }
});