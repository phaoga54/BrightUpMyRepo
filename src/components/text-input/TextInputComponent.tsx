import { Row } from 'components/row';
import { montserrat, poppins } from 'const/theme';
import React from 'react';
import { KeyboardTypeOptions, Platform } from 'react-native';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

type Props = {
    title: string;
    required?: boolean;
    value: string;
    onChange: (text: string) => void
    isPassword?: boolean
    rightIcon?: any
    error?: string
    placeHolder?: string
    keyboardType?: KeyboardTypeOptions
}

export const TextInputComponent = ({ title, required, value, placeHolder, onChange, rightIcon,error,isPassword,keyboardType }: Props) => {
    return (
        <View style={styles.container}>
            <Row>
                <Text style={styles.title}>{title}</Text>
                {required && <Text style={[styles.title, { color: '#C400C4' }]}> {' '}*</Text>}
            </Row>
            <Row containerStyle={[
                { borderColor: value ? "#C400C4" : "#B8B5C6" }, styles.textInputContainer]}>

                <TextInput
                    style={styles.textInput}
                    placeholder={placeHolder || 'Type anything'}
                    onChangeText={onChange}
                    secureTextEntry={isPassword}
                    keyboardType={keyboardType}
                />
                {rightIcon && rightIcon}
            </Row>
            {
                error &&< View style={styles.errorContainer}>
                <Text style={styles.errorText}>
                    {error}
                </Text>
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    errorText:{color:'#C400C4',fontFamily:montserrat.medium,fontSize:11},
    errorContainer:{ paddingVertical: 9, paddingHorizontal: 11, borderRadius: 23, backgroundColor: '#FCDDEC', marginTop: 5 },
    textInput: {
        fontFamily: montserrat.regular, fontSize: 14, color: '#3D3D3D',
        flex: 1,
    },
    textInputContainer: {
        borderWidth: 1,
        borderRadius: 20,
        paddingVertical: Platform.OS==='ios'?12:0,
        paddingHorizontal: 12,
        marginTop: 10,
        justifyContent: 'center', alignItems: 'center'
    },
    title: { color: '#B8B5C6', fontSize: 12, fontFamily: poppins.semiBold },
    container: {
        width: '100%',
        marginTop: 20,
    }
});