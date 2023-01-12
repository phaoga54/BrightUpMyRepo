import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStack } from "types/screens";
import { HomeScreen } from "screens/home";

export type HomeNavigatorParams = {
    [HomeStack.homeScreen]: undefined; 
};

const Stack = createNativeStackNavigator<HomeNavigatorParams>();
export const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={HomeStack.homeScreen}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name={HomeStack.homeScreen} component={HomeScreen}
            />
        </Stack.Navigator>
    );
};
