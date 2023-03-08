import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productsArray: [],
    total:0
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
        setTotal: (state, action) => {
            return {
                ...state,
                total: action.payload
            }
        }
    }
})

export const { setProductsArrayAction, setTotal } = purchaseSlice.actions;
export default purchaseSlice.reducer;