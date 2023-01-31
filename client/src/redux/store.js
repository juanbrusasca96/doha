import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/usersSlice'

const store = configureStore({
    reducer: {
        users: usersReducer,
        // products: productsReducer,
        // tables: tablesReducer
    }
})

export default store