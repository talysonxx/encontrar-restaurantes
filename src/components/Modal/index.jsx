import React, {useEffect} from 'react'
import Portal from './Portal'
import {Overlay, Dialog} from './style'

const styleDialog = {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center'
}

const Modal = ({children, open, onClose}) => {
    useEffect(() => {
        function onEsc(event){
            if(event.keyCode === 27) onClose()
        }

        window.addEventListener('keydown', onEsc)

        return () => {
            window.removeEventListener('keydown', onEsc)
        }
    }, [onClose])

    if (!open) return null

    function onOverlayClick(){
        onClose()
    }
    function onDialogClick(event){
        event.stopPropagation()
    }

    return (
        <Portal>
            <Overlay onClick={onOverlayClick}>
                <Dialog style={styleDialog} onClick={onDialogClick}>{children}</Dialog>
            </Overlay>
        </Portal>
    )
}

export default Modal
