import { useMemo } from "react";

import { Marker } from "@react-google-maps/api";
import LazyLoad from "react-lazy-load";

import { IMarker } from "../../models/IMarker";
import { IColor } from "../../models/IColor";

import iconRed from "../../assets/icons/red-circle.png";
import iconBlue from "../../assets/icons/blue-circle.png";
import iconGreen from "../../assets/icons/green-circle.png";
import iconYellow from "../../assets/icons/yellow-circle.png";
import iconPurple from "../../assets/icons/purple-circle.png";

export const Markers = ({ name, position, icon, handleClick }: IMarker) => {
  const icons: IColor = {
    red: iconRed,
    blue: iconBlue,
    green: iconGreen,
    yellow: iconYellow,
    purple: iconPurple,
  };

  let iconVal = "";

  for (const [key, value] of Object.entries(icons)) {
    if (key === icon) {
      iconVal += value;
    }
  }
  const newIcons = useMemo<string>(() => iconVal, [iconVal]);

  return (
    <LazyLoad>
      <Marker
        onClick={handleClick}
        position={position}
        title={name}
        draggable={false}
        icon={{
          url: newIcons,
          scaledSize: new google.maps.Size(28, 28),
        }}
      />
    </LazyLoad>
  );
};
