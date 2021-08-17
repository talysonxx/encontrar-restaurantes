import React, {useState} from 'react'
import ReactStars from 'react-rating-stars-component'
import {Restaurante, InfoRestaurante, Titulo, Endereco} from './style'
import { ImgRestauranteFoto } from './style'
import restauranteFoto from '../../assets/restaurante-fake.png'
import Skeleton from '../Skeleton'

const CardRestaurante = ({restaurant, onClick}) => {
    const [imageLoaded, setImageLoaded] = useState(false)


    return(    
    <Restaurante onClick={onClick}>
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
        <ImgRestauranteFoto
        imageLoaded={imageLoaded}
        onLoad={() => setImageLoaded(true)}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restauranteFoto} alt='Foto do restaurante'/>
        {!imageLoaded && <Skeleton width='100px' height='100px'/>}
    </Restaurante>
    )
}

export default CardRestaurante