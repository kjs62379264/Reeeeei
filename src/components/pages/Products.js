import React, { useState, useRef } from 'react';
import { GoogleMap, DirectionsRenderer, DirectionsService, LoadScript } from '@react-google-maps/api';
import '../../App.css';

const MapComponent = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const mapRef = useRef(null);

  const origin = "Seoul Station"; // 출발지
  const destination = "Incheon International Airport"; // 도착지

  const fetchDirections = () => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirectionsResponse(result);
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAURuq6uSAKHb9jc7qkfAu6J7KwB9c01Kc">
      <GoogleMap
        mapContainerStyle={{ width: '1000px', height: '1000px' }}
        center={{ lat: 37.5665, lng: 126.9780 }}
        zoom={10}
        onLoad={map => mapRef.current = map}
      >
        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap>
      <button onClick={fetchDirections}>경로 탐색</button>
    </LoadScript>
  );
};

export default MapComponent;