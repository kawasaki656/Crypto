import { StyleSheet, Text, View, Button,TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, {useEffect, useRef} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {clearCryptoDetails, fetchCryptoCurrency} from "../../store/actions";
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import LineChartAxis from '../../components/LineChart/LineChart'
import {CRYPTO_BUCKET, REFRESH_CYCLE, REFRESH_INTERVAL} from "../../utils/global";
import WelcomePanel from "../../components/WelcomePanel/WelcomePanel";
import {storeData} from "../../utils/storage";

function CryptoDetails({navigation, route}) {
    const dispatch = useDispatch();
    const cryptoDetails = useSelector(state => state.AppReducer.cryptoDetails, shallowEqual);
    const passedTicks = useRef(1);
    const userName = useSelector(state => state.AppReducer.loginName);

    useEffect(() => {
        dispatch(fetchCryptoCurrency(route.params.params.id));
        const interval = setInterval(() => {
            if (passedTicks.current >= REFRESH_CYCLE - 1) {
                clearInterval(interval);
            }
            passedTicks.current = ++passedTicks.current;
            dispatch(fetchCryptoCurrency(route.params.params.id));
        }, 1000 * REFRESH_INTERVAL);

        return () => {
            clearInterval(interval);
            dispatch(clearCryptoDetails())
        };
    }, []);

    useEffect(() => {
        storeData(CRYPTO_BUCKET, route.params.params.id, cryptoDetails);
    }, [cryptoDetails]);

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <View style={[styles.container]}>
            <WelcomePanel
                userName={userName}
            />
            <LineChartAxis data={cryptoDetails.map(value => value.rank)}/>
            <Button
                title="back"
                size={32}
                onPress={handleGoBack}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default CryptoDetails;