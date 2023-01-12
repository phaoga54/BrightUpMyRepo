import React, { memo } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomStack } from "types/screens";
import { HomeNavigator } from "./HomeNavigator";
import { TabBarComponent } from "components/tabbar";



export type BottomNavigatorParams = {
  [BottomStack.homeStack]: undefined;
  [BottomStack.brightStack]: undefined;
  [BottomStack.subscriptionStack]: undefined;
  [BottomStack.likeStack]: undefined;
  [BottomStack.plusButton]: undefined;
};

const Tab = createBottomTabNavigator<BottomNavigatorParams>();

export const BottomNavigator = memo(() => { 
  return (
    <Tab.Navigator
      initialRouteName={BottomStack.homeStack}
      tabBar={props => <TabBarComponent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={BottomStack.homeStack}
        component={HomeNavigator}
      />
      <Tab.Screen
        name={BottomStack.brightStack}
        component={HomeNavigator}
      />
      <Tab.Screen
        name={BottomStack.plusButton}
        component={HomeNavigator}
      />
      <Tab.Screen
        name={BottomStack.subscriptionStack}
        component={HomeNavigator}
      />
      <Tab.Screen
        name={BottomStack.likeStack}
        component={HomeNavigator}
      />
    </Tab.Navigator>
  );
});
