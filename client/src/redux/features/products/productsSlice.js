import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productCreated: {},
    allProducts: [],
    allProductsWithStock: []
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
                allProducts: action.payload
            }
        },
        getAllProductsWithStockAction: (state, action) => {
            return {
                ...state,
                allProductsWithStock: action.payload
            }
        },
    }
})

export const { createProductAction, getAllProductsAction, getAllProductsWithStockAction } = productSlice.actions;
export default productSlice.reducer;