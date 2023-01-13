import { Row } from 'components/row';
import { poppins } from 'const/theme';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

type Props = {
    headerIcon: React.ReactNode
    title: string
    children: React.ReactNode
    onViewAll: () => void
}

export const HomeCardComponent = ({ title, children, headerIcon, onViewAll }: Props) => {
    return (
        <View style={styles.container}>
            <Row containerStyle={{ justifyContent: 'space-between', alignItems: 'center',marginBottom:15 }}>
                <Row containerStyle={{ alignItems: 'center' }}>
                    {headerIcon}
                    <Text style={styles.titleText}>{title}</Text>
                </Row>
                <Text style={styles.viewAllText}
                    onPress={onViewAll}
                >View All</Text>
            </Row>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    viewAllText: { color: '#C400C4', fontFamily: poppins.medium, fontSize: 12 },
    titleText: { color: '#3D3D3D', fontFamily: poppins.bold, fontSize: 16, marginLeft: 5 },
    container: {
        paddingHorizontal: 20,
        marginTop: 10
    }
});