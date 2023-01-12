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
import { ButtonComponent } from 'components/button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { UnAuthNavigatorParams } from 'navigation/UnAuthStack';
import { UnAuthStack } from 'types/screens';

export const CreateNewPasswordScreen = () => {
  const { width, height } = useWindowDimensions()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const navigation = useNavigation<NativeStackNavigationProp<UnAuthNavigatorParams>>()

  const onConfirm = () => {
    if (!errorPassword) {
      setErrorPassword('Wrong password')
      return
    }
    navigation.navigate(UnAuthStack.forgotPasswordSuccess)
  }

  return (
    <SafeAreaView style={styles.container}>
      <LogoSvg />
      <View style={styles.contentContainer}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: width - 40 }}>

            <Text style={styles.loginTitle}>Create New Password</Text>
            <Text style={styles.loginDescription}>
              Please fill with new password
            </Text>
            <TextInputComponent
              onChange={setPassword}
              value={password}
              title="New Password"
              required
              rightIcon={<EyeSvg height={20} />}
              isPassword
              placeHolder='*****'
              error={errorPassword}
            />
            <TextInputComponent
              onChange={setConfirmPassword}
              value={confirmPassword}
              title="Confirm New Password"
              required
              rightIcon={<EyeSvg height={20} />}
              isPassword
              placeHolder='*****'
              error={errorPassword}
            />
            <ButtonComponent
              title='Confirm'
              onPress={onConfirm}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  contentContainer: { flex: 1, paddingTop: Platform.OS == 'android' ? 30 : 50, marginHorizontal: 20 },
  loginDescription: { marginTop: 10, fontFamily: poppins.medium, fontSize: 16, color: '#B8B5C6', textAlign: 'center', marginHorizontal: 8 },
  loginTitle: { fontSize: 20, fontFamily: poppins.bold, color: '#3D3D3D', textAlign: 'center' },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  }
});