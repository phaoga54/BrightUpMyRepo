import { poppins } from 'const/theme';
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type Props = {
    title: string
    onPress: () => void
    isActive: boolean
}

export const TagComponent = React.memo(({ onPress, title, isActive }: Props) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: isActive ? '#C400C4' : 'white', borderWidth: isActive ? 0 : 1 }]}
            onPress={onPress}
        >
            <Text style={[styles.titleText, { color: isActive ? 'white' : '#979797' }]}>{title}</Text>
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    titleText:{
        color: '#979797',
        fontFamily:poppins.medium,
        fontSize:12
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius:45,
        borderWidth:1,
        borderColor:'#979797',
        marginLeft: 8
    }
});