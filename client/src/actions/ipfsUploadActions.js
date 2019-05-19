import axios from 'axios'

import { ADD_FILE, GET_ALL_HASH, LOADING_HASHES } from '../constants/index'
import {host} from '../config/host'

import IpfsHttpClient from 'ipfs-http-client'
const ipfs = IpfsHttpClient('localhost', '5001', {protocol: 'http'})



export const addFile = (buffer, file) => dispatch => {
    // let data = Buffer.from(data, 'base64')
    // var fileReader = new FileReader();
    // fileReader.onload = processFile(data);
    // let buffer = fileReader.readAsText(data)

    console.log('file Buffer: ', buffer, file)


        ipfs.add(buffer, (err, results) => {
            if(err) {
              console.error(err)
              return
            }

            let ipfsHash = results[0].hash

            let fileInfo = {
                type: file.type,
                name: file.name,
                ipfsHash: ipfsHash,
            }
            console.log('ipfsHash', fileInfo)
            axios.post(`http://${host}/api/ipfs/add`, fileInfo)
            .then(res => {
                dispatch({
                type: ADD_FILE,
                payload: res.data
            })
            })
            .catch(err => console.log(err));
          });

}

export const getAllHashes = () => dispatch => {
    dispatch(loadHashes())
    axios.post(`http://${host}/api/ipfs/hash-list`)
        .then( res => {
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