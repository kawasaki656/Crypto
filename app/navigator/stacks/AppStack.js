import CryptoList from "../../pages/cryptoList/CryptoList";
import CryptoDetails from "../../pages/cyptoDetails/CryptoDetails";
import React from "react";

export default function AppStack({Stack}) {
    return (
        <Stack.Navigator initialRouteName="CryptoList" headerMode="none" screenOptions={{ animationEnabled: false }}>
            <Stack.Screen name="CryptoList" component={CryptoList} />
            <Stack.Screen name="CryptoDetails" component={CryptoDetails} />
        </Stack.Navigator>
    );
}