import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Restaurante, InfoRestaurante, Titulo, Endereco} from './style'
import { ImgRestauranteFoto } from './style'
import restauranteFoto from '../../assets/restaurante-fake.png'

const CardRestaurante = () => (
    <Restaurante>
        <InfoRestaurante>
            <Titulo style={{marginBottom: '4px'}}>Nome do restaurante</Titulo>
            <ReactStars
                count={5}
                value={4}
                isHalf
                edit={false}
                size={24}
                activeColor="#ffd700"
            />
            <Endereco style={{marginTop: '4px'}}>Av. Brasil, N° 26. Logadouro: Rio Preto</Endereco>
        </InfoRestaurante>
        <ImgRestauranteFoto src={restauranteFoto} alt='Foto do restaurante'/>
    </Restaurante>
)

export default CardRestaurante