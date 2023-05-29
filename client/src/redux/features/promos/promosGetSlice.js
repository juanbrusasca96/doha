import { clearAction, setCopyProductsArrayAction, setProductsArrayAction } from "./promosSlice"

export const setProductsArray = (array) => {
    return (dispatch) => {
        dispatch(setProductsArrayAction(array))
    }
}

export const setCopyProductsArray = (product) => {
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