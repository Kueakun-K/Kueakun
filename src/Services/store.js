import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import switchMode from './reducers/switchMode'


export default configureStore({
  reducer: {
    counter: counterReducer,
    darkToggle: switchMode,
   
  },
})