import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import {Container, Search, Logo, Wrapper, Map} from './style'
import TextField, {Input} from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'

const Home = () => {
    const [inputValue, setInputValue] = useState('')

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
                </Search>
            </Container>
            <Map/>
    </Wrapper>
    )
}

export default Home
