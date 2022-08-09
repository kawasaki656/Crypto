import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (bucket, key, value) => {
    try {
        await AsyncStorage.setItem(
            `${bucket}:${key}`,
            JSON.stringify(value)
        );
    } catch (error) {
        console.error(error)
    }
};

export const getValueByKey = async (bucket, key) => {
    try {
        const value = await AsyncStorage.getItem(
            `${bucket}:${key}`
        );
        return JSON.parse(value);
    } catch (error) {
        console.error(error)
    }
};