import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productsArray: [],
    copyProductsArray: [],
    total: 0
}

const tableSlice = createSlice({
    name: "tables",
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

export const { setProductsArrayAction, setTotalAction, setCopyProductsArrayAction, clearAction } = tableSlice.actions;
export default tableSlice.reducer;