import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UnAuthStack } from "types/screens";
import { LoginScreen } from "screens/login";
import { ForgotPasswordScreen } from "screens/forgot-password";
import { CreateNewPasswordScreen } from "screens/create-new-password";
import { ForgotPasswordSuccessScreen } from "screens/forgot-password-success";
import { RegisterScreen } from "screens/register";
import { RegisterSuccessScreen } from "screens/register-success";
import { UnAuthHeaderComponent } from "components/un-auth-header";
import LeftArrow from 'assets/svgs/LeftArrow.svg'
import { Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


export type UnAuthNavigatorParams = {
  [UnAuthStack.signIn]: undefined;
  [UnAuthStack.forgotPassword]: undefined;
  [UnAuthStack.createNewPassword]: { username: string };
  [UnAuthStack.forgotPasswordSuccess]: undefined
  [UnAuthStack.signUp]: undefined
  [UnAuthStack.signUpSuccess]: undefined
};

const Stack = createNativeStackNavigator<UnAuthNavigatorParams>();
export const UnAuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={UnAuthStack.signIn}
      screenOptions={{
        title: '',
        headerLeft: ({}) => {
          const navigation = useNavigation()
          return <Pressable onPress={navigation.goBack}><LeftArrow /></Pressable>
        },
        headerShadowVisible: false
      }}>
      <Stack.Screen name={UnAuthStack.signIn} component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={UnAuthStack.forgotPassword} component={ForgotPasswordScreen} />
      <Stack.Screen name={UnAuthStack.createNewPassword} component={CreateNewPasswordScreen} />
      <Stack.Screen name={UnAuthStack.forgotPasswordSuccess} component={ForgotPasswordSuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={UnAuthStack.signUp} component={RegisterScreen} />
      <Stack.Screen name={UnAuthStack.signUpSuccess} component={RegisterSuccessScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
