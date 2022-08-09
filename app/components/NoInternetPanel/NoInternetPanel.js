
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default function NoInternetPanel({isInternet})
{
    return (
        <>
        {isInternet ? null : <View style={[styles.container]}>
                <Text style={[styles.text]}>Internet is unavailable</Text>
            </View>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: '#ff132e',
    },
    text: {
        textAlign: 'center',
        color: 'white'
    },
});