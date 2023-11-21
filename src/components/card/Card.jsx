import React from 'react'

export default function Card({ model }) {
    const styles = ''

    return (
        <div className="column is-one-quarter">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                            src={model.img}
                            alt="Placeholder image"
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
                            <a href="#" className="button">Configurer</a>
                        </p>
                    </div>
                </div>
                <div className="card-footer is-justify-content-center"></div>
            </div>
        </div>
    )
}