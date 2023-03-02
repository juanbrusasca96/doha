import axios from "axios";

import { createProductAction, getAllProductsAction, getAllProductsWithStockAction, filterSearchBarAction } from "./productsSlice";

export const createProduct = (product) => {
    return async (dispatch) => {
        let response = await axios.post('/api/products', product);
        response = response.data.payload
        if (response) {
            dispatch(createProductAction(product))
        }
    }
}

export const getAllProducts = (options) => {
    return async (dispatch) => {
        let response = await axios.get(`/api/products?sort=${options?.sort}&color=${options?.filterColor}`);
        response = response.data.payload;
        if (response) {
            dispatch(getAllProductsAction(response))
            dispatch(getAllProductsWithStockAction(response.filter(elem => elem.stock > 0)))
        }
    }
}

export const productsFilterSearch = (value) => {
    return (dispatch) => {
        dispatch(filterSearchBarAction(value))
    }
}