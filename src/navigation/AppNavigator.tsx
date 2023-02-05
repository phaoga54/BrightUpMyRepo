import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UnAuthNavigator } from "./UnAuthStack";
import { AppStack } from "types/screens";
import { AuthNavigator } from "./AuthNavigator";
import { CommonNavigator } from "./CommonNavigator";

export type AppNavigatorParams = { 
  [AppStack.unAuthStack]: undefined;
  [AppStack.authStack]: undefined; 
  [AppStack.commonStack]: undefined; 
};

const Stack = createNativeStackNavigator<AppNavigatorParams>();
export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppStack.unAuthStack}
      screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name={AppStack.unAuthStack} component={UnAuthNavigator} />
      <Stack.Screen name={AppStack.authStack} component={AuthNavigator} />
      <Stack.Screen name={AppStack.commonStack} component={CommonNavigator} />
    </Stack.Navigator>
  );
};
