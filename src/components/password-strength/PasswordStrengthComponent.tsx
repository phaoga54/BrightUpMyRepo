import { Row } from 'components/row';
import { montserrat } from 'const/theme';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { LineComponent } from './Line';

type Props = {
    password: string
}

export const PasswordStrengthComponent = ({ password }: Props) => {
    const [level, setLevel] = useState(0)

    useEffect(() => {
        const passwordLevel = () => {
            return password.length
        }
        setLevel(passwordLevel())
    }, [password])
    
    if (!password.length) return null

    return (
        <View style={styles.container}>
            <Row containerStyle={{ marginVertical: 12, justifyContent: 'space-between' }}>
                <LineComponent isActive={level - 1 >= 0} />
                <LineComponent isActive={level - 1 >= 1} />
                <LineComponent isActive={level - 1 >= 2} />
                <LineComponent isActive={level - 1 >= 3} />
                <LineComponent isActive={level - 1 >= 4} />
            </Row>
            <Text style={styles.strengthText}>Strength Level {level}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    strengthText: { fontFamily: montserrat.regular, fontSize: 12, color: '#959595' },
    container: {
        width: '100%'
    }
});