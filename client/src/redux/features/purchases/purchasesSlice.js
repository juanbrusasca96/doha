import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productsArray: [],
    copyProductsArray: [],
    total: 0
}

const purchaseSlice = createSlice({
    name: "purchases",
    initialState,
    reducers: {
        setProductsArrayAction: (state, action) => {
            return {
                ...state,
                productsArray: action.payload
            }
        },
        setTotalAction: (state, action) => {
            return {
                ...state,
                total: action.payload
            }
        },
        setCopyProductsArrayAction: (state, action) => {
            return {
                ...state,
                copyProductsArray: [...state.copyProductsArray, action.payload]
            }
        },
        clearAction: () => {
            return {
                ...initialState
            }
        }
    }
})

export const { setProductsArrayAction, setTotalAction, setCopyProductsArrayAction, clearAction } = purchaseSlice.actions;
export default purchaseSlice.reducer;