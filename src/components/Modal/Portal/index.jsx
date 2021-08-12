import ReactDOM from 'react-dom'

const PortalModal = ({children}) => {
    const portal = window.document.getElementById('modal-root')
    return ReactDOM.createPortal(children, portal)
}

export default PortalModal
