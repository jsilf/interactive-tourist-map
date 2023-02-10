import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { GoogleMap } from "@react-google-maps/api";
import axios from "axios";

import { Markers } from "./Markers";
import { Checkbox } from "./Checkbox";
import { TextCard } from "./TextCard";

import { ICategory } from "../../models/ICategory";
import { Category } from "../../models/Category";
import { IPins } from "../../models/IPins";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const mapStyle = [
  {
    featureType: "administrative",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "road",
    stylers: [{ color: "off" }],
  },
  {
    featureType: "water",
    stylers: [{ color: "#f0ebe3" }],
  },
  {
    featureType: "landscape",
    stylers: [{ visibility: "off" }],
  },
];

export const URL: string =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://server.gullholmengo.se";

export function Map() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  //creates an array of the number of categories to be indexed
  const [checked, setChecked] = useState<any[]>(new Array(5).fill(false));
  //creates an object with the category as key and boolean as value to show/hide the markers
  const [hide, setHide] = useState<any>({});
  const [open, setOpen] = useState(false);

  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(() => ({ lat: 58.16, lng: 11.38 }), []);
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      backgroundColor: "transparent",
      zoom: 13.7,
      styles: mapStyle,
    }),
    []
  );
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    try {
      axios.get(`${URL}/category/api`).then((response) => {
        let categoriesFromAPI = response.data.map((category: Category) => {
          return new Category(category._id, category.category, category.pins);
        });
        setCategories(categoriesFromAPI);
      });
    } catch (error) {
      console.log(error);
    }
  }

  const toggleMarkers = (category: string) => {
    setHide({ ...hide, [category]: !hide[category] });
  };

  const handleClickMarker = (name: string, information: string) => {
    return [setTitle(name), setText(information), setOpen(true)];
  };

  function handleChecked(e: ChangeEvent<HTMLInputElement>, position: number) {
    //checks the checkbox on indexed position
    const updatedCheckedState = checked.map((item: string, index: number) =>
      index === position ? !item : item
    );
    setChecked(updatedCheckedState);
    toggleMarkers(e.target.id);
  }

  const handleClick = () => {
    return setOpen(false);
  };

  const markerHtml = categories.map((category) => {
    return (
      <span key={category.category}>
        {category.pins.map((pin: IPins) => {
          return (
            <span key={pin.long}>
              {!hide[category.category] && (
                <Markers
                  handleClick={() => {
                    return handleClickMarker(pin.name, pin.information);
                  }}
                  position={{ lat: pin.lat, lng: pin.long }}
                  name={pin.name}
                  icon={pin.color}
                  category={pin.category}
                />
              )}
            </span>
          );
        })}
      </span>
    );
  });

  const checkboxHtml = categories.map((cat, index) => {
    return (
      <Checkbox
        key={cat._id}
        handleChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChecked(e, index);
        }}
        isChecked={checked[index]}
        label={cat.category}
      />
    );
  });

  return (
    <div className="map" data-testid="google-map">
      {/*Map and pins*/}
      <GoogleMap
        center={center}
        mapContainerClassName="map-container"
        options={options}
        onLoad={onLoad}>
        {markerHtml}
      </GoogleMap>

      {/*Card with checkboxes for categories*/}
      <div className="card-checkboxes slide-bottom">{checkboxHtml}</div>

      {/*Popup card with text when marker is clicked*/}
      {open && <TextCard text={text} title={title} onClick={handleClick} />}
    </div>
  );
}
