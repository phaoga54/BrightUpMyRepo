import React from 'react';
import {
    Dimensions,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Row } from 'components/row';
import { BottomStack } from 'types/screens';
import HomeIconSvg from 'assets/svgs/HomeIcon.svg'
import BrightIconSvg from 'assets/svgs/BrightIcon.svg'
import LikeIconSvg from 'assets/svgs/LikeIcon.svg'
import SubscriptionIconSvg from 'assets/svgs/SubscriptionIcon.svg'
import PlusSvg from 'assets/svgs/Plus.svg'
import { poppins } from 'const/theme';

const { width } = Dimensions.get('window')
const BUTTON_WIDTH = (width - 40) / 5

export const TAB_BAR_ICONS_MAP: Record<string, React.ReactNode> = {
    [BottomStack.homeStack]: <HomeIconSvg />,
    [BottomStack.brightStack]: <BrightIconSvg />,
    [BottomStack.subscriptionStack]: <SubscriptionIconSvg />,
    [BottomStack.likeStack]: <LikeIconSvg />,
};

export const TabBarComponent = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const renderIcons = () => {
        return state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = options?.title || route.name;
            const isFocused = state.index === index;

            const onPress = () => {
                const event = navigation.emit({
                    type: "tabPress",
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                }
            };

            const onLongPress = () => {
                navigation.emit({
                    type: "tabLongPress",
                    target: route.key,
                });
            };

            if (route.name === BottomStack.plusButton) return <View
                style={{
                    width: 40, height: 40, backgroundColor: '#C400C4',
                    borderRadius: 40, justifyContent: 'center', alignItems: 'center'
                }}
            >
                <PlusSvg />
            </View>

            return <Pressable
                key={route.name}
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                onPress={onPress}
                onLongPress={onLongPress}>
                <View style={{
                    alignItems: 'center', 
                    height: 40, justifyContent: 'space-between'
                }}>
                    {TAB_BAR_ICONS_MAP[label]}
                    <Text style={{ fontFamily: poppins.medium, fontSize: 12, color: '#B8B5C6' }}>{label}</Text>
                </View>
            </Pressable>
        })
    }
    return (
        <>

            <Row containerStyle={{ justifyContent: 'space-around', }}>
                {renderIcons()}
            </Row>
            <SafeAreaView />
        </>
    );
};

const styles = StyleSheet.create({
    container: {

    }
});