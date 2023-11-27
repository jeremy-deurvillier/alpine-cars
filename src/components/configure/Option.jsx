import { useDispatch, useSelector } from "react-redux"
import Thumbnail from "./Thumbnail"
import { useState } from "react"
import { setColor, setRim, setSealing } from "../../reducers/cars"
import { useParams } from "react-router-dom"

export default function Option() {
    const IMAGE_PER_MODEL = 4
    const IMAGE_PER_SEALING = 3

    const { option } = useParams()

    const dispatch = useDispatch()

    const mycar = useSelector(state => state.cars.current)
    const options = useSelector(state => state.cars.options)
    const error = useSelector(state => state.cars.error)

    let optionPage, action, imageModel, path, maxImage

    /* Colors */

    const [index, setIndex] = useState(1)

    const changeColor = (color) => {
        dispatch(setColor({ color }))
    }

    /* Rim */

    const changeRim = (rim) => {
        dispatch(setRim({ rim }))
    }

    /* Sealing */

    const changeSealing = (sealing) => {
        dispatch(setSealing({ sealing }))
    }

    /* Choice action */

    switch (option) {
        case 'color':
            imageModel = 'modele_' + mycar.model.name.toLowerCase() + '-couleur_' + mycar.color.image.split('.')[0] + '-jante_' + mycar.rim.name + '-' + index + '.jpg'
            path = '/assets/configurateur/modele/' + mycar.model.name.toLowerCase() + '/' + imageModel

            optionPage = options.colors
            maxImage = IMAGE_PER_MODEL
            action = changeColor
            break;
        case 'rim':
            imageModel = 'modele_' + mycar.model.name.toLowerCase() + '-couleur_' + mycar.color.image.split('.')[0] + '-jante_' + mycar.rim.name + '-' + index + '.jpg'
            path = '/assets/configurateur/modele/' + mycar.model.name.toLowerCase() + '/' + imageModel

            optionPage = options.rims
            maxImage = IMAGE_PER_MODEL
            action = changeRim
            break;
        case 'sealing':
            imageModel = mycar.sealing.image.split('.')[0] + '-' + index + '.jpg'
            path = '/assets/configurateur/interieurs/vues/' + imageModel

            optionPage = options.sealing
            maxImage = IMAGE_PER_SEALING
            action = changeSealing
            break;
        default:
            imageModel = 'modele_' + mycar.model.name.toLowerCase() + '-couleur_' + mycar.color.image.split('.')[0] + '-jante_' + mycar.rim.name + '-' + index + '.jpg'
            path = '/assets/configurateur/modele/' + mycar.model.name.toLowerCase() + '/' + imageModel

            optionPage = options.colors
            maxImage = IMAGE_PER_MODEL
            action = changeColor
            break;
    }

    /* Change view */

    const handleChangeView = (e) => {
        if (index + 1 > maxImage) {
            setIndex(1)
        } else {
            setIndex(index + 1)
        }
    }

    return (
        <section id="Option">
            <div className="image-wrapper" onClick={handleChangeView}>
                <img src={path} alt={imageModel} />
            </div>
            <div className="thumbs-list">
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