import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/usersSlice'
import productsReducer from './features/products/productsSlice'

const store = configureStore({
    reducer: {
        users: usersReducer,
        products: productsReducer,
        // tables: tablesReducer
    }
})

export default store