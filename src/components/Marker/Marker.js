import { useState, useEffect } from "react";

const Marker = (options) => {
  const [marker, setMarker] = useState();
  console.log({ options });

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker());
      console.log(marker);
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
      console.log({ marker });
    }
  }, [marker, options]);
  return null;
};

export default Marker;
