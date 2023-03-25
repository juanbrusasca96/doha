import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    active: false,
    day: {}
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
        },
        setDayAction: (state, action) => {
            return {
                ...state,
                day: action.payload
            }
        }
    }
})

export const { setActiveDayAction, setDayAction } = daySlice.actions;
export default daySlice.reducer;