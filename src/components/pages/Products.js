import React, { useState, useRef } from 'react';
import { GoogleMap, DirectionsRenderer, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';
import '../../App.css'; // 스타일 시트 경로 확인 필요
import Footer from '../Footer';

const MapComponent = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const originRef = useRef(null);
  const destinationRef = useRef(null);
  const mapRef = useRef(null);
  const [originCoords, setOriginCoords] = useState(null);
  const [destinationCoords, setDestinationCoords] = useState(null);
  const [duration, setDuration] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const fetchDirections = () => {
    if (origin && destination) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route({
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.TRANSIT
      }, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirectionsResponse(result);
          mapRef.current.fitBounds(result.routes[0].bounds);
          setOriginCoords(result.routes[0].legs[0].start_location);
          setDestinationCoords(result.routes[0].legs[0].end_location);
          setDuration(result.routes[0].legs[0].duration.text);
          setRecentSearches(prev => {
            const newSearches = [`${origin} -> ${destination}`, ...prev];
            if (newSearches.length > 5) {
              newSearches.pop(); // 가장 오래된 기록 제거
            }
            return newSearches;
          });
        } else {
          console.error(`Error fetching directions ${status}`);
        }
      });
    }
  };

  const handlePlaceSelect = (ref, setFunction) => {
    const place = ref.current.getPlace();
    if (place && place.formatted_address) {
      setFunction(place.formatted_address);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD-VpgMKenmUfQvZu2QNVK7CbjSfIBo_h0"
      libraries={['places']}
    >
      <div className='container'>
        <div className='left-panel'>
          <div className='input-container'>
            <h3 className='section-title'>경로 찾기</h3>
            <div className="input-group">
              <Autocomplete
                onLoad={autocomplete => originRef.current = autocomplete}
                onPlaceChanged={() => handlePlaceSelect(originRef, setOrigin)}
              >
                <input
                  type="text"
                  placeholder="출발지"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </Autocomplete>
            </div>
            <div className="input-group">
              <Autocomplete
                onLoad={autocomplete => destinationRef.current = autocomplete}
                onPlaceChanged={() => handlePlaceSelect(destinationRef, setDestination)}
              >
                <input
                  type="text"
                  placeholder="목적지"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </Autocomplete>
            </div>
            <button className='mapbutton' onClick={fetchDirections}>경로 탐색</button>
            {duration && <div className="duration">예상 소요시간: {duration}</div>}
          </div>
          <div className='recent-searches'>
            <h3>최근 검색 기록</h3>
            <ul>
              {recentSearches.map((search, index) => (
                <li key={index}>{search}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='right-panel'>
          <div className='map-container'>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={{ lat: 37.5665, lng: 126.9780 }}
              zoom={12}
              onLoad={map => mapRef.current = map}
              onUnmount={() => mapRef.current = null}
            >
              {originCoords && (
                <Marker
                  position={originCoords}
                  icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                  }}
                />
              )}
              {destinationCoords && (
                <Marker
                  position={destinationCoords}
                  icon={{
                    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                  }}
                />
              )}
              {directionsResponse && (
                <DirectionsRenderer 
                  directions={directionsResponse}
                  options={{
                    polylineOptions: {
                      strokeColor: "#FF0000",
                      strokeOpacity: 0.8,
                      strokeWeight: 6,
                    }
                  }}
                />
              )}
            </GoogleMap>
          </div>
        </div>
      </div>
      <Footer />
    </LoadScript>
  );
};

export default MapComponent;
