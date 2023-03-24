import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/usersSlice'
import productsReducer from './features/products/productsSlice'
import purchasesReducer from './features/purchases/purchasesSlice'
import daysReducer from './features/days/daysSlice'

const store = configureStore({
    reducer: {
        users: usersReducer,
        products: productsReducer,
        purchases: purchasesReducer,
        days: daysReducer,
        // tables: tablesReducer
    }
})

export default store