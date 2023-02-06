import axios from "axios";

import { loginUserAction, setUserAction } from "./usersSlice";

export const signUpUser = (user) => {
    return async (dispatch) => {
        await axios.post('/api/session/register', user);
        let response = await axios.post('/api/session/login', user)
        response = response.data.payload.user
        if (response) {
            localStorage.setItem('user', JSON.stringify(response))
            dispatch(loginUserAction(user))
        }
    }
}

export const loginUser = (user) => {
    return async (dispatch) => {
        let response = await axios.post('/api/session/login', user)
        response = response.data.payload.user
        if (response) {
            localStorage.setItem('user', JSON.stringify(response))
            dispatch(loginUserAction(user))
        }
    }
}

export const setUser = (user) => {
    return async (dispatch) => {
        dispatch(setUserAction(user))
    }
}