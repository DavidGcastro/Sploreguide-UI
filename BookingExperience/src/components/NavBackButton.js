/*
* @Author: Abhi
* @Date:   2018-07-08 14:08:43
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-14 22:51:03
*/

import React from 'react';
import { I18nManager, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import type { ColorPropType } from 'react-native';

type Props = {
    title?: string,
    onPress: Function,
    pressColorAndroid?: ColorPropType
};

const NavBackButton = ({ title, onPress, pressColorAndroid }: Props) => (
    <TouchableOpacity
        onPress={onPress}
        style={styles.container}
    >
        <View style={styles.flexRowCentered}>
            <Image
                style={[styles.icon, { tintColor: '#FFF' }]}
                source={require('../assets/img/back-icon.png')}
            />
            {Platform.OS === 'ios' &&
            <Text numberOfLines={1} style={styles.iosText}>{title}</Text>
            }
        </View>
    </TouchableOpacity>
);

NavBackButton.defaultProps = {
    title: 'Back',
    pressColorAndroid: 'rgba(0, 0, 0, .2)'
};

export default NavBackButton;

const styles = {
    container: {
        // position: 'absolute',
        // left: 0,
        backgroundColor: 'transparent'
    },
    flexRowCentered: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iosText: {
        color: '#007AFF',
        fontSize: 17
    },
    ...Platform.select({
        ios: {
            icon: {
                height: 20,
                width: 10,
                // marginLeft: 10,
                // marginRight: 5,
                // marginVertical: 12,
                // resizeMode: 'contain',
                // transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]
            }
        },
        android: {
            icon: {
                height: 30,
                width: 30,
                margin: 16,
                resizeMode: 'contain',
                transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }]
            }
        }
    })
};