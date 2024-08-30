import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';

const apiKey = 'AIzaSyDwno5wiEuK3ufrKfiLFdrBarPwnP6qHwo'; 

const mapStyles = {
  height: '100vh',
  width: '100%',
};

const defaultCenter = {
  lat: -0.44451463, 
  lng: 36.2723396, 
};

const MapComponent = () => {
  const [directions, setDirections] = useState(null);

  const handleLoad = (map) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const origin = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const destination = defaultCenter;

        const directionsService = new window.google.maps.DirectionsService();

        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result);
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }
        );
      });
    }
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
        onLoad={handleLoad}
      >
        <Marker position={defaultCenter} />
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
