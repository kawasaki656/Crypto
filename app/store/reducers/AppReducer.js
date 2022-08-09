const initialState = {
    loginName: '',
    token: '',
    cryptoList: [],
    cryptoDetails: []
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            const {loginName = ''} = action.payload;
            return {
                ...state,
                loginName: loginName,
                token: 'hash for token'
            };
        }
        case 'UPDATE_CRYPTO_LIST': {
            return {
                ...state,
                cryptoList: action.cryptoList
            };
        }
        case 'UPDATE_CRYPTO_DETAILS': {
            const cryptoDetails = [...state.cryptoDetails];
            cryptoDetails.push(action.cryptoDetails);
            return {
                ...state,
                cryptoDetails: cryptoDetails
            };
        }
        case 'CLEAR_CRYPTO_DETAILS': {
            return {
                ...state,
                cryptoDetails: []
            };
        }
        default: return state
    }
};

export default AppReducer;