import { StyleSheet, Text, View, Button,TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {fetchCryptoList} from "../../store/actions";
import _ from "lodash";
import Filter from "../../components/Filter/Filter";
import WelcomePanel from "../../components/WelcomePanel/WelcomePanel";

function CryptoList({navigation}) {
    const dispatch = useDispatch();
    const cryptoList = useSelector(state => state.AppReducer.cryptoList);
    const userName = useSelector(state => state.AppReducer.loginName);

    const [filter, setFilter] = useState('');
    const [submitFilter, setSubmitFilter] = useState(null);

    const setSelectedCrypto = (id) => {
        navigation.navigate('CryptoDetails', { params: { id }});
    };

    const Item = ({ title, price, onPress }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item
            title={item.name}
            price={item.price_usd}
            onPress={() => setSelectedCrypto(item.id)}
        />
    );

    const handleFilter = () => {
        dispatch(fetchCryptoList());
        if (!filter.length) {
            setSubmitFilter(null);
        } else {
            setSubmitFilter(filter);
        }
    };

    const filterByPercentageChange = (list) => {
        return _.filter(list, value => value.percent_change_24h >= submitFilter);
    };

    useEffect(() => {
        dispatch(fetchCryptoList());
    }, []);
    return (
        <View style={[styles.container]}>
            <WelcomePanel
                userName={userName}
            />
            <Filter
                filter={filter}
                setFilter={setFilter}
                handleFilter={handleFilter}
            />
            <FlatList
                data={submitFilter ? filterByPercentageChange(cryptoList) : cryptoList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#7294ff',
        padding: 4,
        marginVertical: 4,
        marginHorizontal: 8,
    },
    title: {
        fontSize: 16,
    },
});

export default CryptoList;