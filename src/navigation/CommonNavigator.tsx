import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonStack } from "types/screens";
import LeftArrow from 'assets/svgs/LeftArrow.svg'
import SearchSvg from 'assets/svgs/Search.svg'
import HamburgerSvg from 'assets/svgs/Hamburger.svg'
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AccountScreen } from "screens/account";
import { Row } from "components/row";
import { SettingScreen } from "screens/settings";


export type CommonNavigatorParams = {
  [CommonStack.accountScreen]: undefined;
  [CommonStack.settingScreen]: undefined;
  
};

const Stack = createNativeStackNavigator<CommonNavigatorParams>();
export const CommonNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={CommonStack.accountScreen}
      screenOptions={{
        headerLeft: ({ }) => {
          const navigation = useNavigation()
          return <Pressable onPress={navigation.goBack}><LeftArrow fill={"#B8B5C6"}/></Pressable>
        },
        headerShadowVisible: false,
        headerRight: ({ }) => { 
            return <Row containerStyle={{ alignItems: 'center' }}>
                <SearchSvg style={{marginRight:15}}/>
                <HamburgerSvg fill={'#B8B5C6'}/>
            </Row>
        },
      }}>
      <Stack.Screen
        name={CommonStack.accountScreen}
        component={AccountScreen}
        options={{ title: '', headerRight: () => null }}
      />
      <Stack.Screen
        name={CommonStack.settingScreen}
        component={SettingScreen}
      />
    </Stack.Navigator>
  );
};
