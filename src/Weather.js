import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [weather2, setWeather2] = useState(null);
  const url =
    "https://api.weatherapi.com/v1/current.json?key=70a4b36e34664c10aca61607241305&q=Palembang&aqi=no";
  const url2 =
    "https://api.weatherapi.com/v1/current.json?key=70a4b36e34664c10aca61607241305&q=Tangerang&aqi=no";
  useEffect(() => {
    getWeather();
    getWeather2();
  }, []);

  function getWeather() {
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function getWeather2() {
    axios
      .get(url2)
      .then((response) => {
        setWeather2(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div>
      <div className="backgroundContainerEric">
        <img
          src={require("./IMG/Pempek/campuranPempek.jpg")}
          className="bgIMGEric"
          alt="background"
        />
      </div>
      <div className="headFiller"></div>
      <div className="daWrap">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {weather && (
                <div>
                  <h1 className="underline">Palembang Weather Status</h1>
                  <br />
                  <img
                    className="weather_icon"
                    src={weather.current.condition.icon}
                    alt="weather icon"
                  />
                  <h2>{weather.current.condition.text}</h2>
                  <h2>
                    {weather.location.name}, {weather.location.region}
                    <br />
                    <br />
                    Temperature : {weather.current.temp_c} Celsius
                    <br />
                    Feels like : {weather.current.feelslike_c} Celsius
                    <br />
                    Local Time : {weather.location.localtime}
                    <br />
                    <br />
                    Last Updated : {weather.current.last_updated}
                  </h2>

                  {weather.current.temp_c > 36 ||
                  weather.current.condition.text.includes("heavy rain") ||
                  weather.current.condition.text.includes("thunder") ? (
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Not a good time to be cooking pempek
                    </p>
                  ) : (
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                      The weather is nice to cook and eat pempek
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="col-md-6">
              {weather2 && (
                <div>
                  <h1 className="underline">Tangerang Weather Status</h1>
                  <br />
                  <img
                    className="weather_icon"
                    src={weather2.current.condition.icon}
                    alt="weather icon"
                  />
                  <h2>{weather2.current.condition.text}</h2>
                  <h2>
                    {weather2.location.name}, {weather2.location.region}
                    <br />
                    <br />
                    Temperature : {weather2.current.temp_c} Celsius
                    <br />
                    Feels like : {weather2.current.feelslike_c} Celsius
                    <br />
                    Local Time : {weather2.location.localtime}
                    <br />
                    <br />
                    Last Updated : {weather2.current.last_updated}
                  </h2>

                  {weather2.current.temp_c > 36 ||
                  weather2.current.condition.text.includes("heavy rain") ||
                  weather2.current.condition.text.includes("thunder") ? (
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Not a good time to be cooking pempek
                    </p>
                  ) : (
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                      The weather is nice to cook and eat pempek
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
