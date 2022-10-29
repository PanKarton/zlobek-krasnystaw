import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import React, { useMemo } from 'react';

type Props = {
  googleApiKey: string;
};

const Map = ({ googleApiKey }: Props) => {
  console.log(googleApiKey);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleApiKey,
  });

  const coordinates = useMemo(
    () => ({
      lat: 50.98927775884605,
      lng: 23.162105711646113,
    }),
    [],
  );

  if (!isLoaded) return <p>Ładowanie...</p>;
  return (
    <GoogleMap zoom={14} center={coordinates} clickableIcons={false} mapContainerClassName="footer-right">
      <MarkerF position={coordinates} />
    </GoogleMap>
  );
};

export default Map;
