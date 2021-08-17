import React, {useState, useEffect} from 'react'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import {useDispatch, useSelector} from 'react-redux'

import {setRestaurants, setRestaurant} from '../../redux/modules/restaurants'

export const MapContainer = (props) => {
    const dispacth = useDispatch()
    const [map, setMap] = useState(null)
    const {google, query, placeId} = props
    // 34.70348896226077, 135.47984596177918 大阪
    const initCenter = {lat: 34.70348896226077, lng: 135.47984596177918}

    const {restaurants} = useSelector(state => state.restaurants)

    useEffect(() => {
        if(query){
            searchByQuery(query)
        }
    }, [query])

    useEffect(() => {
        if(placeId){
            getRestaurantById(placeId)
        }
    }, [placeId])

    function getRestaurantById(placeId){
        const service = new google.maps.places.PlacesService(map)
        dispacth(setRestaurant(null))

        const request = {
            placeId,
            fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number']
        }

        service.getDetails(request, (place, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                console.log('restaurantes ======',place)
                dispacth(setRestaurant(place))
            }
        })
    }

    function searchByQuery(query){
        const service = new google.maps.places.PlacesService(map)
        dispacth(setRestaurants([]))

        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query
        }

        service.textSearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                dispacth(setRestaurants(results))
            }
        })
    }

    function searchNearby(map, center){
        const service = new google.maps.places.PlacesService(map)
        dispacth(setRestaurants([]))

        const request = {
            location: center,
            radius: '2000',
            type: ['restaurant']
        }

        service.nearbySearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
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
        onRecenter={onMapReady}
        {...props}>
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