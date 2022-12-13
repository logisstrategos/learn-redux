import { createSlice } from '@reduxjs/toolkit'

export const armiesSlice = createSlice({
    name: 'armies',
    initialState: ['Necrons'],
    reducers: {
        addArmy: (state, action) => {
            state.push(action.payload)
        },
        removeArmy: (state, action) => {
            return state.filter(army => army !== action.payload)
        },
        removeAll: state => {
            return []
        }
    }
})

export const { addArmy, removeArmy, removeAll } = armiesSlice.actions

export default armiesSlice.reducer