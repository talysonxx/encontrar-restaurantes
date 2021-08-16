import React from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'

export const MapContainer = (props) => {
    const {google} = props

    return <Map googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCwbj4fmqpd2E678L4HM6xD_pbT9qcp_hc&v=3.exp&libraries=geometry,drawing,places`} google={google} centerAroundCurrentLocation/>
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR'
})(MapContainer)