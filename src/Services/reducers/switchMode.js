import { createSlice } from '@reduxjs/toolkit'

export const switchMode = createSlice({
    name: 'darkToggle',
    initialState: {
        value: true,
    },
    reducers: {
        changeMode: (state) => {
            state.value = !state.value
        }
    }
})

export const {changeMode} = switchMode.actions

export default switchMode.reducer