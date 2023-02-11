import axios from "axios";

import { createProductAction, getAllProductsAction, getAllProductsWithStockAction } from "./productsSlice";

export const createProduct = (product) => {
    return async (dispatch) => {
        let response = await axios.post('/api/products', product);
        response = response.data.payload
        if (response) {
            dispatch(createProductAction(product))
        }
    }
}

export const getAllProducts = () => {
    return async (dispatch) => {
        let response = await axios.get('/api/products');
        response = response.data.payload;
        console.log(response);
        if (response) {
            dispatch(getAllProductsAction(response))
            dispatch(getAllProductsWithStockAction(response.filter(elem => elem.stock > 0)))
        }
    }
}