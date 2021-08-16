import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import logo from '../../assets/logo.svg'
import TextField, {Input} from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'
import RestauranteFoto from '../../assets/restaurante-fake.png'
import Slider from "react-slick"
import {Container, Search, Logo, Wrapper, TituloCarrosel, Carrosel} from './style'
import {Card, CardRestaurante, Modal, Map} from '../../components'

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [modalOpened, setModalOpened] = useState(true)
    const [query, setQuery] = useState(null)
    const {restaurants} = useSelector(state => state.restaurants)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    }

    function handleKeyPress(event){
        if(event.key === 'Enter'){
            setQuery(inputValue)
        }
    }

    return (
    <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo"/>
                    <TextField
                    outlined
                    label='Pesquisar restaurantes'
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                        <Input style={{width: "340px"}}
                        value={inputValue}
                        onChange={({target: {value}}) => setInputValue(value)}
                        onKeyPress={handleKeyPress}/>
                    </TextField>
                    <TituloCarrosel>Na sua Área</TituloCarrosel>
                    <Carrosel {...settings}>
                        <Card photo={RestauranteFoto} title="nothink"/>
                        <Card photo={RestauranteFoto} title="nothink"/>
                        <Card photo={RestauranteFoto} title="nothink"/>
                        <Card photo={RestauranteFoto} title="nothink"/>
                        <Card photo={RestauranteFoto} title="nothink"/>
                        <Card photo={RestauranteFoto} title="nothink"/>
                    </Carrosel>
                </Search>
                {restaurants.map(restaurant => <CardRestaurante restaurant={restaurant}/>)}
            </Container>
            <Map query={query}/>
            {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/> */}
    </Wrapper>
    )
}

export default Home
