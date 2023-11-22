export default function Thumbnail({ object, changeColor }) {
    return (
        <div className="column is-one-fifth" onClick={e => changeColor(object)}>
            <div className="card is-transparent">
                <div className="card-image">
                    <figure className="image is-16by9">
                        <img
                            src={'/assets/configurateur/couleurs/selection/' + object.image}
                            alt={ object.name }
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p>{ object.name }</p>
                        <p>{ object.price } €</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
