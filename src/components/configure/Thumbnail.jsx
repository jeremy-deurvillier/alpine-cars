import { useParams } from "react-router-dom"

export default function Thumbnail({ object, action }) {
    const { option } = useParams()

    let imageSrc, filename

    /* Choice image source */

    switch (option) {
        case 'color':
            imageSrc = '/assets/configurateur/couleurs/selection/' + object.image
            break;
        case 'rim':
            filename = 'jante-' + object.name + '.jpg'

            imageSrc = '/assets/configurateur/jantes/selection/' + filename
            break;
        case 'sealing':
            imageSrc = '/assets/configurateur/interieurs/selection/' + object.image
            break;
        default:
            optionPage = []
            break;
    }

    return (
        <div className="Thumb" onClick={e => action(object)}>
            <div className="thumb-image">
                <img src={imageSrc} alt={object.name} />
            </div>
            <div className="thumb-content">
                <p>{object.name}</p>
                <p>{object.price} €</p>
            </div>
        </div>
    )
}
