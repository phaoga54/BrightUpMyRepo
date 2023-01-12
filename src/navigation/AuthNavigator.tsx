import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack } from "types/screens";
import { BottomNavigator } from "./BottomNavigator";

export type AuthNavigatorParams = {
  [AuthStack.bottomStack]: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParams>();
export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
      }}>
      <Stack.Screen name={AuthStack.bottomStack} component={BottomNavigator} />
    </Stack.Navigator>
  );
};
