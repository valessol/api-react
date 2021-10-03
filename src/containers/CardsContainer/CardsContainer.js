import React, { useState, useEffect } from 'react'
import CardItemList from '../../components/Card/CardItemList'
import Loader from '../../components/Loader/Loader'
import { getData } from '../../functions/getData'

const CardsContainer = () => {
    const [cards, setCards] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)

        getData()
            .then((response) => setCards(response))
            .catch(error => console.log(error))
            .finally(()=>{
                setLoader(false)
            })
    }, [])

    return (
        <>
            <h2>Nuestros Productos</h2>
            {
                loader  
                    ? <Loader />
                    : <CardItemList cards={cards} />
            }
        </>
    )
}

export default CardsContainer
