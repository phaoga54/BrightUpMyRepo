import { images } from 'assets/images';
import React from 'react';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';

type Props = {
    size?: number
    url?: string
}

export const AvatarComponent = ({ size, url }: Props) => {
    return (
        <Image style={{ width: size || 60, height: size || 60, borderRadius: 100,borderWidth:0.5,borderColor:'#959595' }} 
            source={url ? { uri: url } : images.defaultAvatar}
        />
    );
};

const styles = StyleSheet.create({
    container: {
    }
});