import { createSlice } from '@reduxjs/toolkit'

export const switchMode = createSlice({
    name: 'darkToggle',
    initialState: {
        value: false,
    },
    reducers: {
        changeMode: (state) => {
            state.value = !state.value
        }
    }
})

export const {changeMode} = switchMode.actions

export default switchMode.reducer