import React, { useState, useEffect } from "react";
import { Header } from "./Header";

export const WeatherToday = ({
  temp,
  humidity,
  visibility,
  feels_like,
  uvi,
  wind_speed,
  sunrise,
  sunset,
  weatherMood,
  cityName,
  country_code,
  locationTime,
}) => {
  const [weatherMoodIcon, setWeatherMoodIcon] = useState("");
  const [show, setShow] = useState(false);

  let currentDate = new Date().getDate();
  let currentMonth = () => {
    let curMonth = new Date().getMonth();
    let month;
    switch (curMonth) {
      case 0:
        month = "Janaury";
        break;
      case 1:
        month = "Febraury";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;

      default:
        month = "none";
        break;
    }
    return month;
  };

  let currentTime = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    return `${hours}:${minutes} ${ampm}`;
  };

  let sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  let sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  let newLocationTime = new Date(locationTime * 1000).getHours();
  // let locationTimeStr = newLocationTime.slice(8,10);
  // console.log(newLocationTime)

  // newLocationTime >= 6 && newLocationTime <= 18 ....For Day
  // newLocationTime >= 19 && newLocationTime <= 5 ....For Night
  // console.log(weatherMood && newLocationTime )

  let changeWeatherIconFully = () => {
    if (newLocationTime >= 6 && newLocationTime <= 18) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherMoodIcon("clouds");
          break;
        case "Smoke":
          setWeatherMoodIcon("smoke");
          break;
        case "Snow":
          setWeatherMoodIcon("SnowDay");
          break;
        case "Clear":
          setWeatherMoodIcon("SunnyDay");
          break;
        case "Mist":
          setWeatherMoodIcon("MistDay");
          break;
        case "Rain":
          setWeatherMoodIcon("RainDay");
          break;
        case "Haze":
          setWeatherMoodIcon("MistDay");
          break;
        case "Windy":
          setWeatherMoodIcon("WindyDay");
          break;

        default:
          setWeatherMoodIcon("SunnyDay");
          break;
      }
    } else {
      switch (weatherMood) {
        case "Clouds":
          setWeatherMoodIcon("clouds");
          break;
        case "Smoke":
          setWeatherMoodIcon("smoke");
          break;
        case "Snow":
          setWeatherMoodIcon("SnowNight");
          break;
        case "Clear":
          setWeatherMoodIcon("ClearNight");
          break;
        case "Mist":
          setWeatherMoodIcon("MistDay");
          break;
        case "Rain":
          setWeatherMoodIcon("RainNight");
          break;
        case "Haze":
          setWeatherMoodIcon("MistNight");
          break;
        case "Windy":
          setWeatherMoodIcon("WindyNight");
          break;

        default:
          setWeatherMoodIcon("ClearNight");
          break;
      }
    }
  };

  let showInstructions = ()=>{
    setShow(true);
  }
  let closeInstructions = ()=>{
    setShow(false);
  }


  useEffect(() => {
    // changeWeatherIcon()
    changeWeatherIconFully();
  }, [weatherMood]);

  return (
    <>
      {/* <Header /> */}
      <div className="weather-today">
        <div className="instruction-section">
          <div className="i-icon iconifyButton">
            <div title="Instructions" onClick={showInstructions}>
            <span
              className="iconify "
              data-icon="mdi:alpha-i-box"
            ></span>
            </div>
          </div>
          {show ? <div className="instruction-content">
            <p onClick={closeInstructions}>✖</p>
            <h1>Using Instruction</h1>
              <ol>
                <li>Enter your <strong>city name</strong> in search bar.</li>
                <li>Click on "Ready" for fetch your location.</li>
                <li>Click on "Search icon" for <strong>search</strong> and <strong>updating</strong> your weather.</li>
              </ol>
            </div>: null}
        </div>
        <div className="weather-today-container">
          <div className="weather-condition-main-icon">
            <div className="weather-city">
              <p>
                {cityName}, {country_code}
              </p>
            </div>
            <div className="weather-icon">
              <img
                src={`../Images/${weatherMoodIcon}.png`}
                alt="Weather-icon"
              />
            </div>
            <div className="weather-name">{weatherMood}</div>
          </div>
          <div className="weather-condition-main-detail">
            <div className="date-time">
              <p>{`${currentDate} ${currentMonth()}, ${currentTime()}`}</p>
            </div>
            <div className="temp-check">
              <h1>
                {temp} <p>&deg;C</p>
              </h1>
            </div>
            <div className="feels-like">
              <p>Feels like {feels_like} &deg;C</p>
            </div>
          </div>
        </div>
        <div className="current-details-container">
          <div className="div">
            <p>Current Details</p>
          </div>
          <div className="card-container">
            <div className="card first">
              <div className="condition-icon">
                <span className="iconify" data-icon="wi:humidity"></span>
                <p>Humidity</p>
              </div>
              <div className="condition-detail">
                <p>
                  {humidity} <span>%</span>
                </p>
              </div>
            </div>
            <div className="card second">
              <div className="condition-icon">
                <span className="iconify" data-icon="bx:wind"></span>
                <p>Wind</p>
              </div>
              <div className="condition-detail">
                <p>
                  {wind_speed} <span>km/h</span>
                </p>
              </div>
            </div>
            <div className="card third">
              <div className="condition-icon">
                <span
                  className="iconify"
                  data-icon="carbon:uv-index-alt"
                ></span>
                <p>UV Index</p>
              </div>
              <div className="condition-detail">
                <p>{uvi}</p>
              </div>
            </div>
            <div className="card fourth">
              <div className="condition-icon">
                <span
                  className="iconify"
                  data-icon="dashicons:visibility"
                ></span>
                <p>Visibility</p>
              </div>
              <div className="condition-detail">
                <p>
                  {visibility / 1000} <span>km</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sunrise-heading div">
              <p>Sunrise & Sunset</p>
            </div>
            <div className="riseSet-container">
              <div className="sun-rise set-condition">
                <div className="set-condition-icon">
                  <img
                    src="./Images/sunrise.png"
                    className="iconify"
                    alt="Sunrise"
                  />
                  <p>Sunrise</p>
                </div>
                <div className="set-condition-detail">
                  <p>{sunriseTime}</p>
                </div>
              </div>
              <div className="sun-set set-condition">
                <div className="set-condition-icon">
                  <img
                    src="./Images/sunset.png"
                    className="iconify"
                    alt="Sunset"
                  />
                  <p>Sunset</p>
                </div>
                <div className="set-condition-detail">
                  <p>{sunsetTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
