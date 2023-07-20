import axios from "axios";
import { useState, useEffect } from "react";

interface WeatherType {
  date: string;
  temperature: number;
  weatherIcon: string;
  title: string;
  description: string;
}

const weatherForecast = () => {
  const [weatherState, setWeatherState] = useState<WeatherType[]>([]);
  useEffect(() => {
    const getWeatherFromApi = async () => {
      const weatherState = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/weather"
      );
      setWeatherState(weatherState.data);
    };

    getWeatherFromApi();
  }, []);
  return (
    <div>
      {weatherState.map((weatherDay: WeatherType) => {
        return (
          <div>
            <p>
              On {weatherDay.date} you can expect a {weatherDay.weatherIcon}{" "}
              {weatherDay.title}!
            </p>
            <p>
              The temperature will be around {weatherDay.temperature} degrees
              Centigrade
            </p>
            <p>{weatherDay.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default weatherForecast;
