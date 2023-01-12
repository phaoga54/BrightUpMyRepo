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
import { useWindowDimensions } from 'react-native';
import { TextInputComponent } from 'components/text-input';
import { useState } from 'react';
import LogoSvg from 'assets/svgs/Logo.svg'
import EyeSvg from 'assets/svgs/Eye.svg'
import { Row } from 'components/row';
import { CheckBox } from 'components/check-box';
import { ButtonComponent } from 'components/button';
import { SocialLoginButton } from 'components/social-login-button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UnAuthNavigatorParams } from 'navigation/UnAuthStack';
import { AppStack, UnAuthStack } from 'types/screens';
import { AppNavigatorParams } from 'navigation/AppNavigator';

export const LoginScreen = () => {
  const { width, height } = useWindowDimensions()
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const onLogin = () => {
    if (!errorPassword) {
      setErrorPassword('Wrong password')
      return
    }
    navigation.navigate(AppStack.authStack)
  }
  const goToForgotPassword = () =>  navigation.navigate(UnAuthStack.forgotPassword)
  const goToSignUp = () =>  navigation.navigate(UnAuthStack.signUp)

  return (
    <SafeAreaView style={styles.container}>
      <LogoSvg />
      <View style={styles.contentContainer}>
        <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        >
          <Text style={styles.loginTitle}>Login</Text>
          <Text style={styles.loginDescription}>
            Login to your account  - enjoy exclusive videos and many more.
          </Text>
          <TextInputComponent
            onChange={setUserName}
            value={username}
            title="Email or Phone Number"
            required
            placeHolder='09188201'
          />
          <TextInputComponent
            onChange={setPassword}
            value={password}
            title="Password"
            required
            rightIcon={<EyeSvg height={20} />}
            isPassword
            placeHolder='*****'
            error={errorPassword}
          />
          <Row containerStyle={styles.forgotRow}>
            <Row containerStyle={{ alignItems: 'center' }}>
              <CheckBox />
              <Text style={styles.rememberMeText}>Remember me</Text>
            </Row>
            <Text style={styles.forgotPasswordText} onPress={goToForgotPassword}>Forgot password</Text>
          </Row>
          <ButtonComponent
            title='Login'
            onPress={onLogin}
          />

          <Text style={styles.orText}>Or</Text>
          <SocialLoginButton type='Google' onPress={()=>{}} />
          <SocialLoginButton type='Twitter' onPress={()=>{}} />
          <SocialLoginButton type='Facebook' onPress={()=>{}} />
          <Text style={styles.registerText}>Don't have account?<Text style={styles.signUpText} onPress={goToSignUp}>{' '}Sign up</Text></Text>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUpText:{fontFamily:montserrat.bold,color:'#C400C4'},
  registerText: { color: '#959595', fontFamily: montserrat.regular, fontSize: 12, textAlign: 'center', marginTop: 15 },
  orText: { color: '#959595', fontFamily: montserrat.regular, fontSize: 12,textAlign:'center',marginVertical:15 },
  contentContainer: { flex: 1, paddingTop: Platform.OS == 'android' ? 30 : 50, marginHorizontal: 20 },
  forgotPasswordText: { color: '#C400C4', fontFamily: montserrat.medium, fontSize: 12 },
  rememberMeText: { marginLeft: 10, color: '#B8B5C6', fontFamily: montserrat.medium, fontSize: 12 },
  forgotRow: { justifyContent: 'space-between', marginTop: 10, alignItems: 'center' },
  loginDescription: { marginTop: 10, fontFamily: poppins.medium, fontSize: 16, color: '#B8B5C6', textAlign: 'center', marginHorizontal: 8 },
  loginTitle: { fontSize: 20, fontFamily: poppins.bold, color: '#3D3D3D', textAlign: 'center' },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical:15
  }
});