import { createSlice } from '@reduxjs/toolkit'
import { versions, colors, rims, sealing, equipments, accessories, models } from './car-options-datas'

const current = {model: {}, color: colors[2], rim: {}, sealing: {}}
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
        },
        setSealing: (state, action) => {
            state.current = {...state.current, sealing: action.payload.sealing}
        }
    }
})

export const { init, setCar, setColor, setRim, setSealing } = carsSlice.actions

export default carsSlice.reducer