import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productCreated: {}
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

    }
})

export const { createProductAction } = productSlice.actions;
export default productSlice.reducer;