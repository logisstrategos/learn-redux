import { configureStore } from '@reduxjs/toolkit'
import armiesReducer from './features/armies/armiesSlice'

const store = configureStore({
    reducer: {
        armies: armiesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store