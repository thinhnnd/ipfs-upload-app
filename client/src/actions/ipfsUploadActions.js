import axios from 'axios'

import { ADD_FILE, GET_ALL_HASH, LOADING_HASHES } from '../constants/index'
import {host} from '../config/host'


export const addFile = (postForm, config) => dispatch => {
    axios.post(`http://${host}/api/ipfs/add`, postForm, config)
        .then(res => dispatch({
            type: ADD_FILE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const getAllHashes = () => dispatch => {
    dispatch(loadHashes())
    axios.post(`http://${host}/api/ipfs/hash-list`)
        .then( res => {
            console.log(res.data)
            dispatch({
                type: GET_ALL_HASH,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const loadHashes = () => {
    return {
        type: LOADING_HASHES
    }
}