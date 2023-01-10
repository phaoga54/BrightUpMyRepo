import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStack } from "types/screens";
import { UnAuthNavigator } from "./UnAuthStack";

export type AppNavigatorParams = { 
  [AppStack.unAuthStack]: undefined;
  [AppStack.authStack]: undefined; 
};

const Stack = createNativeStackNavigator<AppNavigatorParams>();
export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppStack.unAuthStack}
      screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name={AppStack.unAuthStack} component={UnAuthNavigator} />
      {/* <Stack.Screen name={AppStack.authStack} component={AuthNavigator} /> */}
    </Stack.Navigator>
  );
};
