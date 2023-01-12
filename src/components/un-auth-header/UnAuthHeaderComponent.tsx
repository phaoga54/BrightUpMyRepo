import React from 'react';
import {
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import LeftArrow from 'assets/svgs/LeftArrow.svg'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Row } from 'components/row';

const { width } = Dimensions.get('window')

type Props = {
    navigation: NativeStackNavigationProp<any>
}

export const UnAuthHeaderComponent = ({ navigation }: Props) => {
    return (
        <Row containerStyle={styles.container}>
            <TouchableOpacity onPress={navigation.goBack}>
                <LeftArrow />
            </TouchableOpacity>
        </Row>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width
    }
});