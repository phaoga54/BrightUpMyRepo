import { poppins } from 'const/theme';
import React, { useEffect } from 'react';
import {
    BackHandler,
    SafeAreaView,
    StyleSheet,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import ForgotPasswordSuccess from 'assets/svgs/ForgotPasswordSuccess.svg'
import { ButtonComponent } from 'components/button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UnAuthNavigatorParams } from 'navigation/UnAuthStack';
import { UnAuthStack } from 'types/screens';

export const ForgotPasswordSuccessScreen = () => {
    const { width } = useWindowDimensions()
    const navigation = useNavigation<NativeStackNavigationProp<UnAuthNavigatorParams>>()

    const onLogin = () => {
        navigation.navigate(UnAuthStack.signIn)
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)
        return () => backHandler.remove()
      }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ForgotPasswordSuccess />
            <Text style={styles.loginTitle}>All setting Up</Text>
            <Text style={styles.loginDescription}>Your password already saved, please try logged in</Text>

            <View style={{width:width-40}}>
                <ButtonComponent
                    title='Login'
                    onPress={onLogin}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    loginDescription: { marginTop: 10, fontFamily: poppins.medium, fontSize: 16, color: '#B8B5C6', textAlign: 'center', marginHorizontal: 8 },
    loginTitle: { fontSize: 20, fontFamily: poppins.bold, color: '#3D3D3D', textAlign: 'center' },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});