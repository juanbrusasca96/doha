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
                allProductsFilterSearch: action.payload ? state.allProducts.filter(elem => elem.name.toLowerCase().includes(action.payload)) : state.allProducts,
                allProductsWithStockFilterSearch: action.payload ? state.allProductsWithStock.filter(elem => elem.name.toLowerCase().includes(action.payload)) : state.allProductsWithStock
            }
        },
        clearAction: () => {
            return {
                ...initialState
            }
        }
    }
})

export const { createProductAction, getAllProductsAction, getAllProductsWithStockAction, filterSearchBarAction, clearAction } = productSlice.actions;
export default productSlice.reducer;