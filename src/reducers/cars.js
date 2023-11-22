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
            const carsName = state.versions.map((model, index) => model.name.toLowerCase())
            const rim = action.payload.name == 'pure' ? rims[0] : rims[2]

            if (carsName.includes(action.payload.name)) {
                state.current.model = action.payload.name
                state.current.rim = rim
                state.error.message = ''
            } else {
                state.error.message = 'Ce modèle n\'existe pas !'
            }
        },
        setColor: (state, action) => {
            state.current = {...state.current, color: action.payload.color}
        }
    }
})

export const { init, setCar, setColor } = carsSlice.actions

export default carsSlice.reducer