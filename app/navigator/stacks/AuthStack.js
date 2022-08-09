import LoginScreen from "../../pages/auth/LoginScreen";
import React from "react";

export default function AuthStack({Stack}) {
    return (
        <Stack.Navigator initialRouteName="Login" headerMode="none" screenOptions={{ animationEnabled: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}