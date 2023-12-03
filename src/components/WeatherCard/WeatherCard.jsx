import React from "react";
import "./WeatherCard.css";

function WeatherCard({meteorologia, temperatura, humedad, ciudad}) {
  const PaintWeather = function () {
    switch (meteorologia) {
      case "Rain":
        return <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png" alt="Rain" />;
      case "Clear":
        return <img src="https://cdn-icons-png.flaticon.com/512/831/831682.png" alt="Sun" />;
      case "CloudsSun":
        return <img src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" alt="CloudSun" />;
      case "Clouds":
        return <img src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png" alt="Clouds" />;
      case "Haze":
        return <img src="https://cdn-icons-png.flaticon.com/512/4151/4151022.png" alt="CloudSun" />;
      default:
        return null;
    }
  }
  return (
    <figure>
      <h2>Tiempo en {ciudad}</h2><br />
      <section>{PaintWeather()}</section>
      <p>Meteorologia: {meteorologia}</p><br />
      <p>Temperatura: {temperatura}º</p><br />
      <p>Humedad: {humedad}%</p>
    </figure>
  );
}

export default WeatherCard;
