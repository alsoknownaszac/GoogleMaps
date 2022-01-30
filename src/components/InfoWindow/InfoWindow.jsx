import React from "react";
import { IoMdCloseCircle as Close } from "react-icons/io";
import "./infoWindow.css";

export default function InfoWindow(props) {
  const { details, address, onClick } = props;

  return (
    <div className="infoWindowStyle">
      <div onClick={onClick} className="closeBtn">
        <Close className="closeIcon" />
      </div>
      <div className="mb-2 text-capitalize infoWindowDetails">{details}</div>
      <div className="infoWindowAddress">
        <div className="mb-1">{address.village}</div>
        <div className="mb-1">
          {address.county} {address.postcode}
        </div>
        <div className="mb-1">{address.state}</div>
        <div className="mb-1">
          {address.country} {address.country_code}
        </div>
      </div>
    </div>
  );
}
