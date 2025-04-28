import {configureStore} from '@reduxjs/toolkit'
import beneficiaresSlice from '../todos/todoSlice'

export const store =configureStore({
reducer:beneficiaresSlice,
})