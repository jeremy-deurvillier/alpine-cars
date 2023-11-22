import { useDispatch, useSelector } from "react-redux"
import Thumbnail from "./Thumbnail"
import { useState } from "react"
import { setColor } from "../../reducers/cars"

export default function Color() {
    const mycar = useSelector(state => state.cars.current)

    const colors = useSelector(state => state.cars.options.colors)
    // const models = useSelector(state => state.cars.models)
    const dispatch = useDispatch()

    // const gamme = models[mycar.car].filter(name => {if (name.indexOf(mycar.color.image.split('.')[0]) > -1) return name})
    const [index, setIndex] = useState(1)
    // const imageName = gamme[index]
    const imageName = 'modele_' + mycar.model + '-couleur_' + mycar.color.image.split('.')[0] + '-jante_' + mycar.rim.name + '-' + index + '.jpg'

    const path = '/assets/configurateur/modele/' + mycar.model + '/' + imageName

    const handleChangeView = (e) => {
        if (index + 1 > 4) {
            setIndex(1)
        } else {
            setIndex(index + 1)
        }
    }

    const changeColor = (color) => {
        dispatch(setColor({color}))
    }

    return (
        <section>
            <div style={{ height: '60vh' }} onClick={handleChangeView}>
                <figure className="image">
                    <img src={path + ''} />
                </figure>
            </div>
            <div className="columns is-justify-content-center">
                {colors.map((o, i) => <Thumbnail key={i} object={o} changeColor={changeColor} />)}
            </div>
        </section>
    )
}