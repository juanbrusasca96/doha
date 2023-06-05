import { clearAction, setCopyProductsArrayAction, setIdProductsAction, setProductsArrayAction } from "./promosSlice"
import axios from "axios"

export const setProductsPromoArray = (array) => {
    return (dispatch) => {
        dispatch(setProductsArrayAction(array))
    }
}

export const setCopyProductsPromoArray = (product) => {
    return (dispatch) => {
        dispatch(setCopyProductsArrayAction(product))
    }
}

export const clear = () => {
    return (dispatch) => {
        dispatch(clearAction())
    }
}

export const sendPromo = (promo) => {
    return async (dispatch) => {
        await axios.post('/api/products', promo)
    }
}

export const setIdProducts = (idProducts) => {
    return (dispatch) => {
        dispatch(setIdProductsAction(idProducts))
    }
}