import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import TextField, {Input} from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'
import restaurante from '../../assets/restaurante-fake.png'
import Slider from "react-slick"
import {Container, Search, Logo, Wrapper, Map, TituloCarrosel, Carrosel} from './style'
import {Card} from '../../components'

const Home = () => {
    const [inputValue, setInputValue] = useState('')

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
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
                        onChange={({target: {value}}) => setInputValue(value)} />
                    </TextField>
                    <TituloCarrosel>Na sua Área</TituloCarrosel>
                    <Carrosel {...settings}>
                        <Card photo={restaurante}/>
                        <Card photo={restaurante}/>
                        <Card photo={restaurante}/>
                        <Card photo={restaurante}/>
                        <Card photo={restaurante}/>
                        <Card photo={restaurante}/>
                    </Carrosel>
                </Search>
            </Container>
            <Map/>
    </Wrapper>
    )
}

export default Home
