import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    active: false
}

const daySlice = createSlice({
    name: "days",
    initialState,
    reducers: {
        setActiveDayAction: (state, action) => {
            return {
                ...state,
                active: action.payload
            }
        }
    }
})

export const { setActiveDayAction } = daySlice.actions;
export default daySlice.reducer;