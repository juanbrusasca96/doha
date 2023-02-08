import axios from "axios";

import { createProductAction } from "./productsSlice";

export const createProduct = (product) => {
    return async (dispatch) => {
        let response = await axios.post('/api/products', product);
        response = response.data.payload
        console.log(response);
        if (response) {
            dispatch(createProductAction(product))
        }
    }
}