import axios from "axios";
import { clearAction, setCopyProductsArrayAction, setProductsArrayAction, setTotalAction } from "./purchasesSlice";

export const setProductsArray = (array) => {
    return (dispatch) => {
        dispatch(setProductsArrayAction(array))
        dispatch(setTotalAction(array.reduce((acum, elem) => acum + elem.purchasePrice * elem.stock, 0)))
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

export const sendPurchase = (stockUpdatedArray, productsSelected) => {
    return async (dispatch) => {
        
    }
}