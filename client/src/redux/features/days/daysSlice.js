import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    day: {}
}

const daySlice = createSlice({
    name: "days",
    initialState,
    reducers: {
        setDayAction: (state, action) => {
            return {
                ...state,
                day: action.payload
            }
        },
        clearAction: () => {
            return {
                ...initialState
            }
        }
    }
})

export const { setDayAction, clearAction } = daySlice.actions;
export default daySlice.reducer;