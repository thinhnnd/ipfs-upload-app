import {
    ADD_FILE, GET_ALL_HASH, LOADING_HASHES
} from '../constants'

const initialState = {
    hashList: null,
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_FILE:
            return {
                ...state,
                hashList: [action.payload, ...state.hashList]
            }
        case LOADING_HASHES: 
            return {
                ...state,
                loadding: true
            }
        case GET_ALL_HASH:
            {
                console.log('reducer ipfs action: ', action.payload)
                return {
                    ...state,
                    loading: false,
                    hashList: action.payload
                }
            }
            
        default:
            return state;
    }
}