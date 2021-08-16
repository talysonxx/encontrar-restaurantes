import React from 'react'
import ReactStars from 'react-rating-stars-component'
import {Restaurante, InfoRestaurante, Titulo, Endereco} from './style'
import { ImgRestauranteFoto } from './style'
import restauranteFoto from '../../assets/restaurante-fake.png'

const CardRestaurante = ({restaurant}) => (
    <Restaurante>
        <InfoRestaurante>
            <Titulo style={{marginBottom: '4px'}}>{restaurant.name}</Titulo>
            <ReactStars
                count={5}
                value={restaurant.rating}
                isHalf
                edit={false}
                size={24}
                activeColor="#ffd700"
            />
            <Endereco style={{marginTop: '4px'}}>{restaurant.vicinity || restaurant.formatted_address}</Endereco>
        </InfoRestaurante>
        <ImgRestauranteFoto src={restauranteFoto} alt='Foto do restaurante'/>
    </Restaurante>
)

export default CardRestaurante