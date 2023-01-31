import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: {}
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        loginUserAction: (state, action) => {
            return {
                ...state,
                currentUser: action.payload
            }
        }
    }
})

export const {loginUserAction} = userSlice.actions;
export default userSlice.reducer;
