import React from "react";
import { MdMyLocation as GetLocation } from "react-icons/md";
import "./getLocationButton.css";

export default function GetLocationButton(props) {
  return (
    <div className="locationBtn">
      <div className="iconContainer d-flex align-items-center justify-content-center p-4">
        <GetLocation
          {...props.setHovering}
          onClick={props.onClick}
          className="locationIcon"
        />
        {props.hovering ? (
          <div className="hoverText">click to get your location</div>
        ) : null}
      </div>
    </div>
  );
}
