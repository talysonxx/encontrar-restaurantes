import styled from 'styled-components'
import Slider from 'react-slick'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Container = styled.aside`
    background-color: ${props => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffff;
    padding: 16px;
`

export const Logo = styled.img`
    margin-bottom: 15px;
`

export const  Map = styled.div`
    background-color: red;
    width: 1000px;
`

export const Carrosel = styled(Slider)`
    .slick-slide {
        margin-right: 16px;
    }
`

export const TituloCarrosel = styled.div`
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0 0 0;
`
