import axios from "axios";

import { loginUserAction } from "./usersSlice";

export const loginUser = (user) => {
    return async (dispatch) => {
        // await axios.post('/api/session/register', user);
        let response = await axios.post('/api/session/login', user)
        response = response.data.payload.user
        if (response) {
            localStorage.setItem('user', JSON.stringify(response))
            dispatch(loginUserAction(response))
        }
    }
}