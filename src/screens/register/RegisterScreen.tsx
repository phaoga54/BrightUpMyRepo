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
import { UnAuthStack } from 'types/screens';
import { PasswordStrengthComponent } from 'components/password-strength';

export const RegisterScreen = () => {
  const { width, height } = useWindowDimensions()
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const navigation = useNavigation<NativeStackNavigationProp<UnAuthNavigatorParams>>()

  const onSignUp = () => { 
    navigation.navigate(UnAuthStack.signUpSuccess)
  }
  const goToLogin = () => navigation.navigate(UnAuthStack.signIn)
  return (
    <SafeAreaView style={styles.container}>
      <LogoSvg />
      <View style={styles.contentContainer}>
        <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
          extraScrollHeight={150}
        >
          <View style={{ width: width - 40 }}>

            <Text style={styles.loginTitle}>Sign Up</Text>
            <Text style={styles.loginDescription}>
              Sign Up account  - enjoy exclusive videos and many more.
            </Text>
            <TextInputComponent
              onChange={setFullName}
              value={fullName}
              title="Full Name"
              required
              placeHolder='09188201'
            />
            <TextInputComponent
              onChange={setPhoneNumber}
              value={phoneNumber}
              title="Phone Number"
              required
              placeHolder='09188201'
              keyboardType='number-pad'
            />
            <TextInputComponent
              onChange={setEmail}
              value={email}
              title="Email"
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
            <PasswordStrengthComponent password={password}/>
            
            <Row containerStyle={styles.termRow}>
                <CheckBox />
                <Text style={styles.rememberMeText}>I agree with terms & condition from BrightsUp</Text>
              </Row>
            <ButtonComponent
              title='Sign Up'
              onPress={onSignUp}
            /> 
            <Text style={styles.registerText}>Already have an account?<Text style={styles.signUpText} onPress={goToLogin}>{' '}Login</Text></Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  signUpText:{fontFamily:montserrat.bold,color:'#C400C4'},
  registerText: { color: '#959595', fontFamily: montserrat.regular, fontSize: 12, textAlign: 'center', marginTop: 15 },
  termRow:{ alignItems: 'center',marginTop:10 },
  contentContainer: { flex: 1, paddingTop: Platform.OS == 'android' ? 30 : 50, marginHorizontal: 20 },
  rememberMeText: { marginLeft: 10, color: '#B8B5C6', fontFamily: montserrat.medium, fontSize: 12 },
  loginDescription: { marginTop: 10, fontFamily: poppins.medium, fontSize: 16, color: '#B8B5C6', textAlign: 'center', marginHorizontal: 20 },
  loginTitle: { fontSize: 20, fontFamily: poppins.bold, color: '#3D3D3D', textAlign: 'center' },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  }
});