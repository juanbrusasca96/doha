import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productCreated: {},
    allProducts: [],
    allProductsWithStock: [],
    allProductsFilterSearch: [],
    allProductsWithStockFilterSearch: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        createProductAction: (state, action) => {
            return {
                ...state,
                productCreated: action.payload
            }
        },
        getAllProductsAction: (state, action) => {
            return {
                ...state,
                allProducts: action.payload,
                allProductsFilterSearch: action.payload
            }
        },
        getAllProductsWithStockAction: (state, action) => {
            return {
                ...state,
                allProductsWithStock: action.payload,
                allProductsWithStockFilterSearch: action.payload
            }
        },
        filterSearchBarAction: (state, action) => {
            return {
                ...state,
                allProductsFilterSearch: state.allProducts.filter(elem => elem.name.includes(action.payload)),
                allProductsWithStockFilterSearch: state.allProductsWithStock.filter(elem => elem.name.includes(action.payload))
            }
        },
    }
})

export const { createProductAction, getAllProductsAction, getAllProductsWithStockAction, filterSearchBarAction } = productSlice.actions;
export default productSlice.reducer;