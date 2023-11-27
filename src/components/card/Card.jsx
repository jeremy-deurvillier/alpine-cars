import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default function Card({ model }) {
    const urlImage = '/assets/configurateur/modele/selection/' + model.image
    const link = '/configure/' + model.name.toLowerCase() + '/color'

    return (
        <div className="card">
            <div className="card-image">
                <img src={urlImage} alt={model.name} />
            </div>
            <div className="card-content">
                <p className="card-title">{model.name}</p>
                <p className="card-text">à partir de {model.price} €</p>
                <div className='card-action'>
                    <Link to={link} className="button">Configurer</Link>
                </div>
            </div>
        </div>
    )
}