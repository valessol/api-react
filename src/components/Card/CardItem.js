import React from 'react'
import { Card, Button } from 'react-bootstrap'
//import './card.css'

const CardItem = ({ id, title, thumbnailUrl}) => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="card-item-style">
                <Card.Img variant="top" src={thumbnailUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Click Me!</Button>
                </Card.Body>
                </Card>
        </>
    )
}

export default CardItem

