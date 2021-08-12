import React from 'react'
import styled from 'styled-components'

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

const CardeImagem = ({photo, title}) => (
    <Card photo={photo}>
        <Title>{title}</Title>
    </Card>
)

export default CardeImagem