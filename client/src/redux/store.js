import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/usersSlice'
import productsReducer from './features/products/productsSlice'
import purchasesReducer from './features/purchases/purchasesSlice'

const store = configureStore({
    reducer: {
        users: usersReducer,
        products: productsReducer,
        purchases: purchasesReducer,
        // tables: tablesReducer
    }
})

export default store