import { useEffect, useState } from "react";
import { UseGeoLocation } from "../UseGeoLocation/UseGeoLocation";
import { useHover } from "../UseHover/UseHover";
import axios from "axios";

export const UseMapApi = () => {
  const [coordDetails, setCoordDetails] = useState([]);

  const location = UseGeoLocation();

  const [btnHovering, setBtnHovering] = useHover();

  let currentLocation;
  if (location.loaded) {
    currentLocation = location.coordinates;
  }

  useEffect(() => {
    if (location.loaded) {
      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${currentLocation.lat}&lon=${currentLocation.lng}`
        )
        .then((res) => {
          // console.log(res);
          setCoordDetails(res.data.features);
        })
        .catch((err) => {
          console.log(err);
          alert("could not fetch Map data. check network and try again");
        });
    }
  }, [btnHovering]);

  return [coordDetails, location, btnHovering, setBtnHovering, currentLocation];
};
