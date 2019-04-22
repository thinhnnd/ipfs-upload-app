import axios from 'axios'
import {
    GET_PROFILE,
    LOAD_PROFILE,
    GET_POSTS,
    LOADING_POSTS,
    FOLLOW, 
    UNFOLLOW
} from '../constants'
import {host} from '../config/host'


export const getUserProfile = (userId) => dispatch => {
    dispatch(loadProfile())
    axios.get(`http://${host}/api/users/${userId}`)
        .then( res => dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const getPostsByUserId = (userId) => dispatch => {
    dispatch(loadPosts());
    axios.get(`http://${host}/api/posts/${userId}`)
        .then(res => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const followUser = (userId) => dispatch => {
    axios.post(`http://${host}/api/users/follow`, {userId})
        .then(res => dispatch({
            type: FOLLOW,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const unfollowUser = (userId) => dispatch => {
    axios.post(`http://${host}/api/users/unfollow`, {userId})
        .then(res => dispatch({
            type: UNFOLLOW,
            payload: res.data
        }))
        .catch(err => console.log(err))
}

export const loadProfile = () => {
    return {
        type: LOAD_PROFILE
    }
}

export const loadPosts = () => {
    return {
        type: LOADING_POSTS
    }
}