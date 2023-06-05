import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productsArray: [],
    copyProductsArray: [],
    idProducts: []
}

const promoSlice = createSlice({
    name: "promos",
    initialState,
    reducers: {
        setProductsArrayAction: (state, action) => {
            return {
                ...state,
                productsArray: action.payload
            }
        },
        setCopyProductsArrayAction: (state, action) => {
            return {
                ...state,
                copyProductsArray: action.payload
            }
        },
        setIdProductsAction: (state, action) => {
            return {
                ...state,
                idProducts: action.payload
            }
        },
        clearAction: () => {
            return {
                ...initialState
            }
        }
    }
})

export const { setProductsArrayAction, setCopyProductsArrayAction, clearAction, setIdProductsAction } = promoSlice.actions;
export default promoSlice.reducer;