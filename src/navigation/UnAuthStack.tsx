import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UnAuthStack } from "types/screens";
import { LoginScreen } from "screens/login";


export type UnAuthNavigatorParams = {
  [UnAuthStack.signIn]: undefined; 
};

const Stack = createNativeStackNavigator<UnAuthNavigatorParams>();
export const UnAuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={UnAuthStack.signIn}
      screenOptions={{ headerShown: false }}> 
      <Stack.Screen name={UnAuthStack.signIn} component={LoginScreen} />
    </Stack.Navigator>
  );
};
