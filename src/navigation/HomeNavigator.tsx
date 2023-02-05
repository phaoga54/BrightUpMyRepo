import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStack } from "types/screens";
import { HomeScreen } from "screens/home";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LeftArrow from 'assets/svgs/LeftArrow.svg'
import SearchSvg from 'assets/svgs/Search.svg'
import HamburgerSvg from 'assets/svgs/Hamburger.svg'
import { Row } from "components/row";
import { LiveNowListScreen } from "screens/live-now-list";
import { BrightsScreen } from "screens/brights";

export type HomeNavigatorParams = {
    [HomeStack.homeScreen]: undefined;
    [HomeStack.liveNowListScreen]: undefined;
    [HomeStack.trendingListScreen]: undefined;
    [HomeStack.brightScreen]: undefined;
};

const Stack = createNativeStackNavigator<HomeNavigatorParams>();
export const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName={HomeStack.homeScreen}

            screenOptions={{

                headerLeft: ({ }) => {
                    const navigation = useNavigation()
                    return <Pressable onPress={navigation.goBack}><LeftArrow /></Pressable>
                },
                headerShadowVisible: false,
                headerRight: ({ }) => { 
                    return <Row containerStyle={{ alignItems: 'center' }}>
                        <SearchSvg style={{marginRight:15}}/>
                        <HamburgerSvg fill={'#B8B5C6'}/>
                    </Row>
                },
            }}
        >
            <Stack.Screen name={HomeStack.homeScreen} component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen name={HomeStack.liveNowListScreen} component={LiveNowListScreen}
            />
            <Stack.Screen name={HomeStack.trendingListScreen} component={LiveNowListScreen}
            />
            <Stack.Screen
              name={HomeStack.brightScreen}
              component={BrightsScreen}
              options={{headerShown:false}}
            />
        </Stack.Navigator>
    );
};
