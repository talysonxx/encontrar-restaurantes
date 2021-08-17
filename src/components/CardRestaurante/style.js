import styled from 'styled-components'

export const Restaurante = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top 5px;
    padding: 16px;
    background-color: #fff;
    border-left: 5px solid transparent;
    :hover {
        background-color: ${props => props.theme.colors.background};
        border-left-color: ${props => props.theme.colors.primary};
    }
`

export const InfoRestaurante = styled.div`
    display: flex;
    flex-direction: column;
`

export const Titulo = styled.span`
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
`

export const Endereco = styled.span`
    font-family: ${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    line-height: 19px;
`
export const ImgRestauranteFoto = styled.img`
    display: ${props => (props.imageLoaded ? 'block': 'none')};
    width: 100px;
    height: 100px;
    border-radius: 6px;
    // mais proporcional
    object-fit: cover;
`