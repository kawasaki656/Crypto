import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from 'react-redux'
import NoInternetPanel from "../components/NoInternetPanel/NoInternetPanel";
import {useNetInfo} from "@react-native-community/netinfo";
import AppStack from "./stacks/AppStack";
import AuthStack from "./stacks/AuthStack";

const stack = createStackNavigator();
export function AppNavigator() {
    const token = useSelector(state => state.AppReducer.token);
    const netInfo = useNetInfo();
    // const state = useSelector(state => state.AppReducer);
    const renderStacks = () => {
        return (
            <>
                {token ?
                    <>
                        <NoInternetPanel
                            isInternet={netInfo.isInternetReachable}
                        />
                        <AppStack
                            Stack={stack}
                        />
                    </>
                    : <AuthStack
                        Stack={stack}
                    />}
            </>
        )
    };

    return (
        <SafeAreaProvider>
            <NavigationContainer>{renderStacks()}</NavigationContainer>
        </SafeAreaProvider>
    );
}