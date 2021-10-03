import React from 'react'
import { Container } from 'react-bootstrap'
import CardItem from './CardItem'
import './card.css'

const CardItemList = ({cards}) => {
    return (
        <Container className='card-style'>
                    {
                        [
                            cards.map((item)=>{
                                return (
                                    <CardItem {...item} />
                                )
                            })
                        ]
                    }
        </Container>
    )
}

export default CardItemList
