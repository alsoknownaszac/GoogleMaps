export const apiIsLoaded = (mapData, lat, lng, setBtnHovering) => {
  if (mapData.map_) {
    const latLng = new mapData.maps_.LatLng(lat, lng);
    mapData.map_.panTo(latLng);
    mapData.map_.setZoom(18);
  }
  setBtnHovering.onClick();
};
