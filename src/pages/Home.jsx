import React from "react";
import Marker from "../components/Marker/Marker";
import { UseMapApi } from "../components/UseMapApi/UseMapApi";
import { apiIsLoaded } from "../components/ApiIsLoaded/apiIsLoaded";
import {
  GoogleMapImports,
  MapControls,
} from "../components/MapImports/MapImports";

export default function GoogleMap() {
  const mapRef = React.useRef();

  let mapData = mapRef.current;

  const [coordDetails, location, btnHovering, setBtnHovering, currentLocation] =
    UseMapApi();

  return (
    <div className="mapContainer">
      <GoogleMapImports ref={mapRef}>
        {location.loaded &&
          coordDetails.map((obj) => {
            const details = obj.properties.type;
            const address = obj.properties.address;
            return (
              <Marker
                key={obj.properties.place_id}
                lat={location.coordinates.lat}
                lng={location.coordinates.lng}
                details={details}
                address={address}
              />
            );
          })}
      </GoogleMapImports>
      <MapControls
        hovering={btnHovering}
        setHovering={setBtnHovering}
        onClick={() => {
          apiIsLoaded(
            mapData,
            currentLocation.lat,
            currentLocation.lng,
            setBtnHovering
          );
        }}
      />
    </div>
  );
}
