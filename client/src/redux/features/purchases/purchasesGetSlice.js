import axios from "axios";
import { setCopyProductsArrayAction, setProductsArrayAction, setTotalAction } from "./purchasesSlice";

export const setProductsArray = (array) => {
    return (dispatch) => {
        dispatch(setProductsArrayAction(array))
        dispatch(setTotalAction(array.reduce((acum, elem) => acum + elem.purchasePrice, 0)))
    }
}

export const setCopyProductsArray = (product) => {
    return (dispatch) => {
        dispatch(setCopyProductsArrayAction(product))
    }
}