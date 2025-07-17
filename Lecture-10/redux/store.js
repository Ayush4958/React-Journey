import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counter/counterslice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})