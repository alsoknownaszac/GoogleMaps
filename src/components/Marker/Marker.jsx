import React, { useState } from "react";
import { IoLocation as Location } from "react-icons/io5";
import InfoWindow from "../InfoWindow/InfoWindow";
import "./marker.css";

export default function Marker(props) {
  const { details, address } = props;
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show === false ? setShow(true) : setShow(false);
  };

  const beforeClick = "blue";
  const afterClick = "red";

  return (
    <div className="markerCard">
      <Location
        color={show ? beforeClick : afterClick}
        className="markerStyle"
        onClick={handleShow}
      />
      {show && (
        <InfoWindow details={details} address={address} onClick={handleShow} />
      )}
    </div>
  );
}
