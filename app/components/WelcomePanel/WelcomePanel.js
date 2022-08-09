import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'

export default function WelcomePanel({userName})
{
    return (
        <View style={[styles.welcomeContainer]}>
            <Text style={[styles.welcomeText]}>Welcome {userName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeContainer: {
        padding: 4,
        backgroundColor: '#7294ff',
    },
    welcomeText: {
        textAlign: 'center',
        color: 'white'
    },
});