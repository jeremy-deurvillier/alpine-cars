import { useParams } from "react-router-dom"

export default function Thumbnail({ object, action }) {
    const { option } = useParams()
    const styles = {
        cursor:'pointer',
    }

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
        <div className="column is-one-fifth" onClick={e => action(object)} style={styles}>
            <div className="card is-transparent">
                <div className="card-image">
                    <figure className="image is-16by9">
                        <img
                            src={imageSrc}
                            alt={object.name}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p>{object.name}</p>
                        <p>{object.price} €</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
