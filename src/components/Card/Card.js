import React from 'react'

const Card = ({url, title, id}) => {
    return (
        <>
            <div className="card">
                <img src={url} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">Id de Album: {id}</h5>
                    <p className="card-text">{title}</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </>
    )
}

export default Card;
