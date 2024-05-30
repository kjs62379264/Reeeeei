import React, { useState, useRef } from 'react';
import { GoogleMap, DirectionsRenderer, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';
import '../../App.css';

const MapComponent = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [origin, setOrigin] = useState(''); // 출발지 상태 관리
  const [destination, setDestination] = useState(''); // 목적지 상태 관리
  const originRef = useRef(null);
  const destinationRef = useRef(null);
  const mapRef = useRef(null);
  const [originCoords, setOriginCoords] = useState(null); // 출발지 좌표 상태
  const [destinationCoords, setDestinationCoords] = useState(null); // 목적지 좌표 상태
  const [duration, setDuration] = useState(''); // 소요시간을 저장할 상태

  const fetchDirections = () => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: window.google.maps.TravelMode.TRANSIT
    }, (result, status) => {
      console.log("Status:", status); // 상태 로그 출력
      console.log("Result:", result); // 결과 로그 출력
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirectionsResponse(result);
        mapRef.current.fitBounds(result.routes[0].bounds);
        // 저장된 좌표를 사용하여 지도에 마커 설정
        setOriginCoords(result.routes[0].legs[0].start_location);
        setDestinationCoords(result.routes[0].legs[0].end_location);
        setDuration(result.routes[0].legs[0].duration.text); // 예상 소요시간 저장
      } else {
        console.error(`Error fetching directions ${status}`);
      }
    });
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD-VpgMKenmUfQvZu2QNVK7CbjSfIBo_h0"
      libraries={['places']}
    >
      <div className='input-container'>
        <Autocomplete
          onLoad={autocomplete => originRef.current = autocomplete}
          onPlaceChanged={() => {
            if (originRef.current && originRef.current.getPlace()) {
              const place = originRef.current.getPlace();
              setOrigin(place.formatted_address);
              setOriginCoords(place.geometry.location);
            }
          }}
        >
          <input
            type="text"
            placeholder="출발지"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </Autocomplete>
        <Autocomplete
          onLoad={autocomplete => destinationRef.current = autocomplete}
          onPlaceChanged={() => {
            if (destinationRef.current && destinationRef.current.getPlace()) {
              const place = destinationRef.current.getPlace();
              setDestination(place.formatted_address);
              setDestinationCoords(place.geometry.location);
            }
          }}
        >
          <input
            type="text"
            placeholder="목적지"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </Autocomplete>
        <div className='button-container'>
          <button className='mapbutton' onClick={fetchDirections}>경로 탐색</button>
        </div>
      </div>
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
                strokeColor: "#FF0000", // 빨간색으로 변경
                strokeOpacity: 0.8,
                strokeWeight: 6,
              }
            }}
            />
          )}
        </GoogleMap>
        {duration && <div className="duration">예상 소요시간: {duration}</div>} {/* 예상 소요시간 표시 */}
      </div>
    </LoadScript>
  );
};

export default MapComponent;
