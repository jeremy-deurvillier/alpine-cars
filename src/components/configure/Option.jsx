import { useDispatch, useSelector } from "react-redux"
import Thumbnail from "./Thumbnail"
import { useState } from "react"
import { setCar, setColor, setRim } from "../../reducers/cars"
import { useParams } from "react-router-dom"

export default function Option() {
    const { name } = useParams()
    const { option } = useParams()

    const dispatch = useDispatch()

    const mycar = useSelector(state => state.cars.current)
    const models = useSelector(state => state.cars.versions)
    const options = useSelector(state => state.cars.options)
    const error = useSelector(state => state.cars.error)

    const car = (name === 'legende') ? models[1] : models[0]
    const rim = (mycar.model === '' || mycar.model === 'pure') ? options.rims[0] : options.rims[2]

    let optionPage, action, imageModel, path

    // if (!mycar.model.name) {
    //     dispatch(setCar({ car }))
    //     dispatch(setRim({ rim }))
    // }

    const handleChangeView = (e) => {
        if (index + 1 > 4) {
            setIndex(1)
        } else {
            setIndex(index + 1)
        }
    }

    /* Colors */

    const [index, setIndex] = useState(1)

    const changeColor = (color) => {
        dispatch(setColor({ color }))
    }

    /* Rim */

    const changeRim = (rim) => {
        dispatch(setRim({ rim }))
    }

    /* Choice action */

    switch (option) {
        case 'color':
            imageModel = 'modele_' + mycar.model.name.toLowerCase() + '-couleur_' + mycar.color.image.split('.')[0] + '-jante_' + mycar.rim.name + '-' + index + '.jpg'
            path = '/assets/configurateur/modele/' + mycar.model.name.toLowerCase() + '/' + imageModel

            optionPage = options.colors
            action = changeColor
            break;
        case 'rim':
            imageModel = 'modele_' + mycar.model.name.toLowerCase() + '-couleur_' + mycar.color.image.split('.')[0] + '-jante_' + mycar.rim.name + '-' + index + '.jpg'
            path = '/assets/configurateur/modele/' + mycar.model.name.toLowerCase() + '/' + imageModel

            optionPage = options.rims
            action = changeRim
            break;
        case 'sealing': // TODO 
            imageModel = 'modele_' + mycar.model.name.toLowerCase() + '-couleur_' + mycar.color.image.split('.')[0] + '-jante_' + mycar.rim.name + '-' + index + '.jpg'
            path = '/assets/configurateur/modele/' + mycar.model.name.toLowerCase() + '/' + imageModel

            optionPage = options.sealing
            action = changeRim
            break;
        default:
            optionPage = []
            break;
    }

    return (
        <section>
            <div style={{ height: '60vh' }} onClick={handleChangeView}>
                <figure className="image">
                    <img src={path} />
                </figure>
            </div>
            <div className="columns is-justify-content-center">
                {
                    optionPage.map((o, i) => {
                        if (o.for.includes(mycar.model.name.toLowerCase()) || o.for.includes('all')) {
                            return <Thumbnail key={i} object={o} action={action} />
                        }
                    })
                }
            </div>
        </section>
    )
}