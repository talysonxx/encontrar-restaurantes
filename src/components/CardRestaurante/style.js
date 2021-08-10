import styled from 'styled-components'

export const Restaurante = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    margin-top 5px;
    padding: 16px;
    background-color: #ffff;
    border-left: 5px solid transparent;
    :hover {
        background-color: ${props => props.theme.colors.background};
        border-left-color: ${props => props.theme.colors.primary};
    }
`