import React, {useState, useEffect} from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import {useDispatch, useSelector} from 'react-redux'

import {setRestaurants} from '../../redux/modules/restaurants'

export const MapContainer = (props) => {
    const dispacth = useDispatch()
    const [map, setMap] = useState(null)
    const {google, query} = props
    const initCenter = {lat: -27.0922364, lng: -52.6166878}

    const {restaurants} = useSelector(state => state.restaurants)

    useEffect(() => {
        if(query){
            searchByQuery(query)
        }
    }, [query])

    function searchByQuery(query){
        const service = new google.maps.places.PlacesService(map)

        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query
        }

        service.textSearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                console.log('restaurantes ======',results)
                dispacth(setRestaurants(results))
            }
        })
    }

    function searchNearby(map, center){
        const service = new google.maps.places.PlacesService(map)

        const request = {
            location: center,
            radius: '2000',
            type: ['restaurant']
        }

        service.nearbySearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                console.log('restaurantes ======',results)
                dispacth(setRestaurants(results))
            }
        })
    }

    function onMapReady(zero, map){
        setMap(map)
        searchNearby(map, map.center)
    }

    return (
        <Map style={{width: '70%', height: '100%'}} googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCwbj4fmqpd2E678L4HM6xD_pbT9qcp_hc&v=3.exp&libraries=geometry,drawing,places`}
        google={google}
        centerAroundCurrentLocation
        zoom={15}
        initialCenter={initCenter}
        onReady={onMapReady}
        onRecenter={onMapReady}>
            {restaurants.map(restaurant => (
                <Marker
                key={restaurant.place_id}
                name={restaurant.name}
                position={{
                    lat: restaurant.geometry.location.lat(),
                    lng: restaurant.geometry.location.lng()
                }}></Marker>
            ))}
        </Map>
    )
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      language: 'pt-BR'
    }
  ))(MapContainer)