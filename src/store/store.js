import { configureStore } from '@reduxjs/toolkit'
import cars from '../reducers/cars'

export default configureStore({
  reducer: {
    cars
  },
})
