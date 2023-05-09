import { useEffect, useState } from "react";
import { getCoordinates } from "./Services/getCoordinates";

import "./App.css";
import { getCurrentWeather } from "./Services/getCurrentWeather";
import DataContainer from "./Components/DataContainer/DataContainer";

function App() {
  const [weather, setWeather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const loadWeather = async () => {
      const coordinates = await getCoordinates();

      if (coordinates) {
        const weatherData = await getCurrentWeather(
          coordinates.latitude,
          coordinates.longitude
        );
        setWeather(weatherData);
      } else {
        // Controlar en en el caso en que el usuario no da permisos de acceso a la localización
      }
    };

    loadWeather();
  }, []);

  return (
    <div className="container_app">
      <h1 className="Titule">Weather App</h1>
      {weather ? (
        <div className="weather_container">
          <DataContainer weather={weather} isCelsius={isCelsius} />

          <div className="container_button">
            <button onClick={() => setIsCelsius(!isCelsius)}>
              Change °{isCelsius ? "F" : "C"}
            </button>
          </div>
        </div>
      ) : (
        <p>Loading weather ... </p>
      )}
    </div>
  );
}

export default App;
