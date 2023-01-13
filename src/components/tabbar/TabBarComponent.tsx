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

            const renderIcons = () => {
                switch (route.name) {
                    case BottomStack.homeStack:
                        return <HomeIconSvg fill={isFocused ? '#C400C4' : '#B8B5C6'} />
                    case BottomStack.brightStack:
                        return <BrightIconSvg stroke={isFocused ? '#C400C4' : '#B8B5C6'} />
                    case BottomStack.subscriptionStack:
                        return <SubscriptionIconSvg fill={isFocused ? '#C400C4' : '#B8B5C6'} />
                    case BottomStack.likeStack:
                        return <LikeIconSvg fill={isFocused ? '#C400C4' : '#B8B5C6'} />
                    default: return <HomeIconSvg stroke={isFocused ? '#C400C4' : '#B8B5C6'} />
                }
            }

            if (route.name === BottomStack.plusButton) return <View
                style={styles.plusContainer}
            >
                <PlusSvg />
            </View>

            return <Pressable
                key={route.name}
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                onPress={onPress}
                onLongPress={onLongPress}>
                <View style={styles.tabBarContainer}>
                    {renderIcons()}
                    <Text style={[styles.label,isFocused&&{color:'#C400C4'}]}>{label}</Text>
                </View>
            </Pressable>
        })
    }
    return (
        <>
            <Row containerStyle={styles.rowContainer}>
                {renderIcons()}
            </Row>
            <SafeAreaView style={{backgroundColor:'white'}}/>
        </>
    );
};

const styles = StyleSheet.create({
    rowContainer:{ justifyContent: 'space-around',paddingTop:10,backgroundColor:'white' },
    label:{ fontFamily: poppins.medium, fontSize: 12, color: '#B8B5C6' },
    tabBarContainer:{
        alignItems: 'center', 
        height: 40, justifyContent: 'space-between'
    },
    container: {

    },
    plusContainer:{
        width: 40, height: 40, backgroundColor: '#C400C4',
        borderRadius: 40, justifyContent: 'center', alignItems: 'center'
    }
});