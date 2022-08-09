import { FETCH_CRYPTO_CURRENCY, FETCH_CRYPTO_LIST } from "../../utils/api";
import { CRYPTO_LIST_LIMIT } from "../../utils/global";
import * as types from "./types";

export const updateLoginName = value => {
    return {
        type: types.LOGIN,
        loginName: value
    };
};

export const updateCryptoList = value => {
    return {
        type: types.UPDATE_CRYPTO_LIST,
        cryptoList: value
    };
};
export const updateCryptoDetails = value => {
    return {
        type: types.UPDATE_CRYPTO_DETAILS,
        cryptoDetails: value
    };
};
export const clearCryptoDetails = value => {
    return {
        type: types.CLEAR_CRYPTO_DETAILS
    };
};

export const fetchCryptoList = (from = 0, limit = CRYPTO_LIST_LIMIT) => {
    return dispatch => {
        return fetch(`${FETCH_CRYPTO_LIST}?start=${from}&limit=${limit}`, {
            method: "GET",
        })
            .then(response => response.json())
            .then(response => {
                dispatch(updateCryptoList(response.data))
            })
    }
};

export const fetchCryptoCurrency = (id) => {
    return dispatch => {
        return fetch(`${FETCH_CRYPTO_CURRENCY}?id=${id}`, {
            method: "GET",
        })
            .then(response => response.json())
            .then(response => {
                dispatch(updateCryptoDetails(response && response[0]))
            })
    }
};
