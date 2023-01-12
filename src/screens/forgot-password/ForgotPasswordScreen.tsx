import React from 'react';
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { montserrat, poppins } from 'const/theme';
import { TextInputComponent } from 'components/text-input';
import { useState } from 'react';
import LogoSvg from 'assets/svgs/Logo.svg'
import { ButtonComponent } from 'components/button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UnAuthNavigatorParams } from 'navigation/UnAuthStack';
import { UnAuthStack } from 'types/screens';

export const ForgotPasswordScreen = () => { 
    const [username, setUserName] = useState('') 
    const navigation = useNavigation<NativeStackNavigationProp<UnAuthNavigatorParams>>()

    const onSend = () => {
        navigation.navigate(UnAuthStack.createNewPassword,{username})
    }

    return (
        <SafeAreaView style={styles.container}>
            <LogoSvg />
            <View style={styles.contentContainer}>
                <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                >
                    <Text style={styles.loginTitle}>Forgot Password</Text>
                    <Text style={styles.loginDescription}>
                    Please fill your email address to complete request changes
                    </Text>
                    <TextInputComponent
                        onChange={setUserName}
                        value={username}
                        title="Email or Phone Number"
                        required
                        placeHolder='09188201'
                    />
                    <ButtonComponent
                        title='Send'
                        onPress={onSend}
                    />
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contentContainer: { flex: 1, paddingTop: Platform.OS == 'android' ? 30 : 50, marginHorizontal: 0 },
    loginDescription: { marginHorizontal:0,marginBottom:20,marginTop: 10, fontFamily: poppins.medium, fontSize: 16, color: '#B8B5C6', textAlign: 'center', },
    loginTitle: { marginHorizontal:0,fontSize: 20, fontFamily: poppins.bold, color: '#3D3D3D', textAlign: 'center' },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    }
});