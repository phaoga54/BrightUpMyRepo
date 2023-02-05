import { AvatarComponent } from 'components/avatar';
import { Row } from 'components/row';
import { montserrat } from 'const/theme';
import React, { useCallback } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { AccountRowComponent } from './component/AccountRow';
import UserSvg from 'assets/svgs/User.svg'
import BillSvg from 'assets/svgs/Bill.svg'
import BarGraphSvg from 'assets/svgs/BarGraph.svg'
import SettingSvg from 'assets/svgs/Setting.svg'
import HelpSvg from 'assets/svgs/Help.svg'
import LogoutSvg from 'assets/svgs/Logout.svg'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CommonNavigatorParams } from 'navigation/CommonNavigator';
import { CommonStack } from 'types/screens';

export const AccountScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<CommonNavigatorParams>>()
    const goToSetting = useCallback(()=>{
        navigation.navigate(CommonStack.settingScreen)
    },[])
    return (
        <SafeAreaView style={styles.container}>
            <Row containerStyle={{ marginHorizontal: 20, alignItems: 'center' }}>
                <AvatarComponent />
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontFamily: montserrat.semiBold, fontSize: 16, color: 'black' }}>Ann Walker</Text>
                    <Text style={{ fontFamily: montserrat.medium, fontSize: 13, color: '#C400C4' }}>@ann_walker</Text>
                </View>
            </Row>
            <View style={{ flex: 1, marginHorizontal: 20,paddingTop:30 }}>
                <AccountRowComponent
                    icon={<UserSvg />}
                    title={'Your Channel'}
                    onPress={() => { }}
                />
                <AccountRowComponent
                    icon={<BillSvg />}
                    title={'Get BrightsUp Premium'}
                    onPress={() => { }}
                />
                <AccountRowComponent
                    icon={<BarGraphSvg />}
                    title={'Time Watched'}
                    onPress={() => { }}
                />
                <View style={{width:'100%',height:1,backgroundColor:'#B8B5C6'}}/>
                <AccountRowComponent
                    icon={<SettingSvg />}
                    title={'Settings'}
                    onPress={goToSetting}
                />
                <AccountRowComponent
                    icon={<HelpSvg />}
                    title={'Help & Feedback'}
                    onPress={() => { }}
                />
                <AccountRowComponent
                    icon={<LogoutSvg />}
                    title={'Sign Out'}
                    onPress={() => { }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});