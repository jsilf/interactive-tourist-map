import { useLoadScript } from "@react-google-maps/api";
import { Map } from "../../components/Map/Map";

export const libraries = String(["places"]);

export const Home = () => {
  const apiKey: string = process.env.REACT_APP_API_KEY || "";

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    [libraries]: libraries,
  });

  if (!isLoaded)
    return (
      <div
        className="display-flex justify-center align-center"
        style={{
          height: "100vh",
        }}>
        <h2>Laddar kartan...</h2>
      </div>
    );

  return <Map />;
};
