import axios from "axios";
import { setProductsArrayAction, setTotal } from "./purchasesSlice";

export const setProductsArray = (array) => {
    return async (dispatch) => {
        dispatch(setProductsArrayAction(array))
        dispatch(setTotal(array.reduce((acum, elem) => acum + elem.purchasePrice, 0)))
    }
}