import axios from "axios";

import { loginUserAction } from "./usersSlice";

export const loginUser = (user) => {
    return async (dispatch) => {
        let response = await axios.post('/api/users', user);
        console.log(response);
        dispatch(loginUserAction(response.data))
    }
}