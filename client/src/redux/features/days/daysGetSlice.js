import axios from "axios";
import { clearAction, setActiveDayAction, setDayAction } from "./daysSlice";

export const setDay = (day) => {
    return async (dispatch) => {
        let response = await axios.post('/api/days', day)
        response = response.data.payload
        if (response) {
            dispatch(setDayAction(response))
        }
    }
}

export const getDay = () => {
    return async (dispatch) => {
        let response = await axios.get('/api/days/activeDay')
        response = response.data.payload
        if (response) {
            dispatch(setDayAction(response))
        }
    }
}

export const endDay = (id, day) => {
    return async (dispatch) => {
        let response = await axios.post(`/api/days/${id}`, day)
        response = response.data.payload
        if (response) {
            dispatch(clearAction())
        }
    }
}