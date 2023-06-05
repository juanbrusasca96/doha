import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/usersSlice'
import productsReducer from './features/products/productsSlice'
import purchasesReducer from './features/purchases/purchasesSlice'
import daysReducer from './features/days/daysSlice'
import tablesReducer from './features/tables/tablesSlice'
import promosReducer from './features/promos/promosSlice'

const store = configureStore({
    reducer: {
        users: usersReducer,
        products: productsReducer,
        purchases: purchasesReducer,
        days: daysReducer,
        tables: tablesReducer,
        promos: promosReducer
    }
})

export default store