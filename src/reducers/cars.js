import { createSlice } from '@reduxjs/toolkit'
import { versions, colors, rims, sealing, equipments, accessories, models } from './car-options-datas'

const current = {model: {}, color: colors[2], rim: {}}
const error = {message: ''}

const initialState = {
    versions,
    models,
    options: { colors, rims, sealing, equipments, accessories },
    current,
    error
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        init: () => console.log('Hello !'),
        setCar: (state, action) => {
            const carsName = state.versions.map(model => model.name)

            if (carsName.includes(action.payload.car.name)) {
                state.current.model = action.payload.car
                state.error.message = ''
            } else {
                state.error.message = 'Ce modèle n\'existe pas !'
            }
        },
        setColor: (state, action) => {
            state.current = {...state.current, color: action.payload.color}
        },
        setRim: (state, action) => {
            state.current = {...state.current, rim: action.payload.rim}
        }
    }
})

export const { init, setCar, setColor, setRim } = carsSlice.actions

export default carsSlice.reducer