import axios from "axios";

import { createProductAction, getAllProductsAction, getAllProductsWithStockAction, filterSearchBarAction, clearAction } from "./productsSlice";

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
        let response;
        options ? response = await axios.get(`/api/products?sort=${options?.sort}&color=${options?.color}`) : response = await axios.get('/api/products');
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

export const updateStockInDB = (stockUpdated, products) => {
    return async (dispatch) => {
        let array = [];
        for (let i = 0; i < stockUpdated.length; i++) {
            let response = await axios.post(`/api/products/${stockUpdated[i]._id}`, stockUpdated[i])
            array.push(response.data.payload)
        }
        products.forEach(product => {
            if (!array.find(p => p._id === product._id)) {
                array.push(product)
            }
        })
        array = array.sort((a, b) => a.name.localeCompare(b.name))
        dispatch(getAllProductsAction(array))
        dispatch(getAllProductsWithStockAction(array.filter(elem => elem.stock > 0)))
    }
}

export const clearProducts = () => {
    console.log('si');
    return (dispatch) => {
        dispatch(clearAction())
    }
}