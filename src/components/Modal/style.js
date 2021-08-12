import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(78, 89, 131, 0.5);
    // desfoque do fundo
    backdrop-filter: blur(5px);

    z-index: 999;
`

export const Dialog = styled.div`
    display: flex;
    felx-direction: colunm;
    justify-content: space-between;
    max-height: calc(100% - 144px);
    width: 500px;
    padding: 24px;
    background-color: #fff;
    box-shadow: 0 0 32 rgba(78, 89, 131, 0.5);
    border-radius: 8px;
`