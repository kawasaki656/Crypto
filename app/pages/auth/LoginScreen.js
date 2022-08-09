import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import React, { useState } from 'react';
import {Input} from "react-native-elements";
import { useSelector, useDispatch } from 'react-redux'

function LoginScreen() {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const handleLogin = () => {
        console.info('login')
        if (login.length) {
            dispatch({type: 'LOGIN', payload: {loginName: login}})
        }
    };

    return (
        <View style={[styles.container]}>
            <TextInput
                placeholder="Pls type login"
                autoCapitalize="none"
                value={login}
                onChangeText={setLogin}
            />
            <Button
                title="LOGIN"
                onPress={handleLogin}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        flex: 1
    }
});
export default LoginScreen;