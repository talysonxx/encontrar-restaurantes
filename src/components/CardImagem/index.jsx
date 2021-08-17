import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Skeleton from '../Skeleton'

const Card = styled.div`
    display: flex;
    justify-content: center;
    width: 90px;
    padding: 5px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${props => props.photo});
    background-size: cover;
`

const Title = styled.span`
    font-family: ${props => props.theme.fonts.regular};
    color: #ffff;
    font-size: 16px;
`

const CardeImagem = ({photo, title}) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    
    useEffect(() => {
        const imageLoader = new Image()
        imageLoader.src =  photo
        imageLoader.onload = () => setImageLoaded(true)
    }, [photo])

    return(
        <>
        {imageLoaded ? (
        <Card photo={photo}>
            <Title>{title}</Title>
        </Card>
        ) : (
            <Skeleton width='90px' height='90px'/>
        )}
        </>
    )
}

export default CardeImagem