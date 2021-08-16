import React from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'

export const MapContainer = (props) => {
    // const {google} = props
    const initCenter = {lat: -27.0922364, lng: -52.6166878}

    return (
        <Map style={{width: '70%', height: '100%'}} googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCwbj4fmqpd2E678L4HM6xD_pbT9qcp_hc&v=3.exp&libraries=geometry,drawing,places`}
        google={props.google}
        centerAroundCurrentLocation
        zoom={10}
        initialCenter={initCenter}/>
    )
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    }
  ))(MapContainer)