import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ model }) {
    const urlImage = '/assets/configurateur/modele/selection/' + model.image
    const link = '/configure/' + model.name.toLowerCase()

    return (
        <div className="column is-one-quarter">
            <div className="card is-radiusless">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                            src={urlImage}
                            alt={model.name}
                        />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="medi">
                        <div className="medi-content">
                            <p className="title is-4">{model.name}</p>
                            <p className="subtitle is-6">
                                à partir de {model.price} €
                            </p>
                        </div>
                    </div>
                    <div className="content my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                        iaculis mauris. <a>@bulmaio</a>.
                        <br />
                        <p className="is-flex is-justify-content-center pt-4">
                            <Link to={link} className="button is-radiusless">Configurer</Link>
                        </p>
                    </div>
                </div>
                <div className="card-footer is-justify-content-center"></div>
            </div>
        </div>
    )
}