import { Row } from 'components/row';
import { montserrat } from 'const/theme';
import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
} from 'react-native';

type Props = {
    icon: React.ReactNode
    title: string
    onPress: () => void
}

export const AccountRowComponent = ({ icon, title, onPress }: Props) => {
    return (
        <Pressable onPress={onPress}>
            <Row containerStyle={{ alignItems: 'center',marginVertical:15 }}>
                {icon}
                <Text style={styles.titleText}>{title}</Text>
            </Row>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    titleText: { fontFamily: montserrat.medium, fontSize: 14, color: '#3D3D3D',marginLeft:10 },
    container: {
        flex: 1
    }
});