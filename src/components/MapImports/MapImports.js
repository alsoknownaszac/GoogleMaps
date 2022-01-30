import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import GetLocationButton from "../GetLocationButton/GetLocationButton";

export const GoogleMapImports = React.forwardRef(({ children }, ref) => {
  const [defaultCoordinates] = useState({
    center: {
      lat: 6.4627,
      lng: 3.3997,
    },
    zoom: 15,
  });

  return (
    <GoogleMapReact
      ref={ref}
      bootstrapURLKeys={{
        libraries: ["places", "geometry", "drawing", "visualization"],
        // key: [process.env.REACT_APP_GOOGLE_KEY], //key is not working
      }}
      defaultCenter={defaultCoordinates.center}
      defaultZoom={defaultCoordinates.zoom}
    >
      {children}
    </GoogleMapReact>
  );
});

export const MapControls = ({ btnHovering, setBtnHovering, ...props }) => {
  return (
    <GetLocationButton
      hovering={btnHovering}
      setHovering={setBtnHovering}
      {...props}
    />
  );
};
