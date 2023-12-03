import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import WeatherCard from "./components/WeatherCard";
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [ciudad, setCiudad] = useState("Madrid");
  const apikey = 'd3bb6429154ae0c7d0919927b34e3591';
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setError(null)
        const result = await response.json();
        const newWeather = [{id: uuidv4(), data: result}]
        setData(newWeather);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [ciudad]);

  const paintWeather = () => {
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!data) {
      return <div>Loading...</div>;
    }
    console.log(data);
    if (data != null) {
      return data.map(tiempo => (
        <WeatherCard
          ciudad={ciudad}
          key={tiempo.id}
          meteorologia={tiempo.data.weather[0].main}
          temperatura={tiempo.data.main.temp}
          humedad={tiempo.data.main.humidity}
        />
      ));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newciudad = e.target.ciudad.value;
    setCiudad(newciudad)
  }

  return (
    <main>
      <section id='content'>
        <h1>Elige la ciudad en la que quieras consultar el tiempo:</h1><br />
        <form onSubmit={handleSubmit}>
          <label htmlFor="ciudad">Ciudad:</label>
          <input type="text" name="ciudad" placeholder="Madrid"/><br />
          <button type="submit">Buscar</button>
        </form>
        <section>{paintWeather()}</section>
      </section>
    </main>
  )
}

export default App
