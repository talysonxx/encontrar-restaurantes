import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import logo from '../../assets/logo.svg'
import TextField, {Input} from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'
import RestauranteFoto from '../../assets/restaurante-fake.png'
import {Container, Search, Logo, Wrapper, TituloCarrosel, Carrosel, ModalTitle, ModalContent} from './style'
import {Card, CardRestaurante, Modal, Map, Loader, Skeleton} from '../../components'

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [modalOpened, setModalOpened] = useState(false)
    const [query, setQuery] = useState(null)
    const [placeId, setPlaceId] = useState(null)
    const {restaurants, restaurantSelected} = useSelector(state => state.restaurants)

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    }

    function handleKeyPress(event){
        if(event.key === 'Enter'){
            setQuery(inputValue)
        }
    }

    function handleOpenModal(placeId){
        setPlaceId(placeId)
        setModalOpened(true)
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
                    {restaurants.length > 0 ? 
                    (
                        <>
                            <TituloCarrosel>Na sua Área</TituloCarrosel>
                            <Carrosel {...settings}>
                            {restaurants.map(restaurant => (
                            <Card
                            key={restaurant.place_id}
                            photo={restaurant.photo ? restaurant.photo[0].getUrl : RestauranteFoto}
                            title={restaurant.name}/>)
                            )}
                            </Carrosel>
                        </>
                    ) : (
                            <Loader/>
                        )
                    }
                </Search>
                {restaurants.map(restaurant => (
                    <CardRestaurante
                    onClick={() => handleOpenModal(restaurant.place_id)} restaurant={restaurant}/>)
                )}
            </Container>


            <Map query={query} placeId={placeId}/>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                        <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Aberto agora :)' : 'Fechado no momento :('}</ModalContent>
                    </>
                ) : (
                    <>
                        <Skeleton width='10px' height='10px'/>
                        <Skeleton width='10px' height='10px'/>
                        <Skeleton width='10px' height='10px'/>
                        <Skeleton width='10px' height='10px'/>
                    </>
                )}    
            </Modal>
    </Wrapper>
    )
}

export default Home
