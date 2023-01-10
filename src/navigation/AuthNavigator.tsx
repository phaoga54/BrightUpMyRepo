import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStack } from "types/screens";

export type AuthNavigatorParams = {
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
