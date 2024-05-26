import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';

function loadScript(src, callback) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    script.onload = () => callback();
    document.head.appendChild(script);
  }
  
  function Map({ center, destination }) {
    const mapRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      if (!window.google) {
        loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAURuq6uSAKHb9jc7qkfAu6J7KwB9c01Kc&libraries=places`, () => {
          setIsLoaded(true);
        });
      } else {
        setIsLoaded(true);
      }
    }, []);
  
    useEffect(() => {
      if (isLoaded) {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const map = new google.maps.Map(mapRef.current, {
          zoom: 14,
          center: center
        });
        directionsRenderer.setMap(map);
  
        directionsService.route({
          origin: center,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING
        }, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        });
      }
    }, [isLoaded, center, destination]);
  
    return <div ref={mapRef} style={{ width: 400, height: 400 }}></div>;
  }
  
  export default function App() {
    const currentPosition = { lat: 37.5665, lng: 126.9780 };
    const destination = { lat: 37.5775, lng: 126.9853 };
  
    return (
      <div>
        <h1>Google Maps Directions Example</h1>
        <Map center={currentPosition} destination={destination} />
      </div>
    );
  }