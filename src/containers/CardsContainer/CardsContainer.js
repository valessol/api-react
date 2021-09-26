import React, {useState, useEffect} from 'react'
import Card from '../../components/Card/Card';
import { getDataFromStorage } from '../../functions/getData';

const CardsContainer = () => {
    const [cards, setCards] = useState([]);

    const newCards = () => {
        getDataFromStorage()
        .then((newCard) => {
            setCards(newCard);
        })
    }

    useEffect(() => {
        newCards()
    }, [])


    return (
        <>
          {
              cards.map((card) => (
                  <Card key={card.id} url={card.url} title={card.title} />
              ))
          }  
        </>
    )
}

export default CardsContainer
