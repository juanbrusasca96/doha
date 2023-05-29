import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productsArray: [],
    copyProductsArray: []
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
        clearAction: () => {
            return {
                ...initialState
            }
        }
    }
})

export const { setProductsArrayAction, setCopyProductsArrayAction, clearAction } = promoSlice.actions;
export default promoSlice.reducer;