import { createSlice } from '@reduxjs/toolkit'
import { versions, colors, rims, sealing, equipments, accessories } from './car-options-datas'

const initialState = {
    versions,
    options: { colors, rims, sealing, equipments, accessories }
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        init: () => console.log('Hello !')
    }
})

export const { init } = carsSlice.actions

export default carsSlice.reducer