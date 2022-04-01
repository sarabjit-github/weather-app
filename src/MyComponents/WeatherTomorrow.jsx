import React, { useState, useEffect } from "react";

export const WeatherTomorrow = ({
  tomorrowTime,
  tomSunrise,
  tomSunset,
  tomMoonrise,
  tomMoonset,
  tomHumditiy,
  tomWindSpeed,
  tomUVindex,
  tomDayTemp,
  tomNightTemp,
  tomMinTemp,
  tomMaxTemp,
  tomDayFeel,
  tomNightFeel,
  tomEveFeel,
  tomMornFeel,
  tomWeatherMood,
  locationTime
}) => {
  const [weatherMoodIcon, setWeatherMoodIcon] = useState("");

  let tomorrowMonth = () => {
    let tomMonth = new Date(tomorrowTime*1000).getMonth();
    let month;
    switch (tomMonth) {
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
  let tomDate = new Date(tomorrowTime*1000).getDate();
  let tomorrowDay = ()=>{
    let tomDay = new Date(tomorrowTime*1000).getDay();
    let dayTom ;
    switch (tomDay) {
      case 0:
        dayTom = "Sunday";
        break;
      case 1:
        dayTom = "Monday";
        break;
      case 2:
        dayTom = "Tuesday";
        break;
      case 3:
        dayTom = "Wednesday";
        break;
      case 4:
        dayTom = "Thursday";
        break;
      case 5:
        dayTom = "Friday";
        break;
      case 6:
        dayTom = "Saturday";
        break;
    
      default:
        dayTom = "No Day"
        break;
    }
    return dayTom;
  }

  let currentTime = () => {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    return `${hours}:${minutes} ${ampm}`;
  };

  let sunriseTime = new Date(tomSunrise * 1000).toLocaleTimeString();
  let sunsetTime = new Date(tomSunset * 1000).toLocaleTimeString();

  let newLocationTime = new Date(locationTime * 1000).getHours();
  // let locationTimeStr = newLocationTime.slice(8,10);
  // console.log(newLocationTime)

  // newLocationTime >= 6 && newLocationTime <= 18 ....For Day
  // newLocationTime >= 19 && newLocationTime <= 5 ....For Night
  // console.log(weatherMood && newLocationTime )

  let changeWeatherIconFully = () => {
    if (newLocationTime >= 6 && newLocationTime <= 18) {
      switch (tomWeatherMood) {
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
      switch (tomWeatherMood) {
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

  useEffect(() => {
    // changeWeatherIcon()
    changeWeatherIconFully();
  }, [tomWeatherMood]);

  return (
    <>
      {/* <Header /> */}
      <div className="weather-today">
        <div className="weather-today-container">
          <div className="weather-condition-main-icon">
            <div className="weather-city tom-weather-city">
              <p>Day {tomDayTemp}&deg;<span>&#8593;</span> &bull; Night {tomNightTemp}&deg;<span>&#8595;</span></p>
            </div>
            <div className="weather-icon">
              <img
                src={`../Images/${weatherMoodIcon}.png`}
                alt="Weather-icon"
              />
            </div>
            <div className="weather-name">{tomWeatherMood}</div>
          </div>
          <div className="weather-condition-main-detail">
            <div className="date-time">
              <p>{`${tomDate} ${tomorrowMonth()}, ${tomorrowDay()}`}</p>
            </div>
            <div className="temp-check-tom">
              <h1>
                <span>Min:</span> {tomMinTemp} <p>&deg;C</p>
              </h1>
              <h1>
               <span>Max:</span> {tomMaxTemp} <p>&deg;C</p>
              </h1>
            </div>
            <div className="feels-like">
              <p>Feels like {tomDayFeel} &deg;C</p>
            </div>
          </div>
        </div>
        <div className="current-details-container">
          <div className="div">
            <p>Tomorrow Details</p>
          </div>
          <div className="card-container">
            <div className="card first">
              <div className="condition-icon">
                <span className="iconify tomIconify" data-icon="wi:humidity"></span>
                <p>Humidity</p>
              </div>
              <div className="condition-detail">
                <p>{tomHumditiy} <span>%</span></p>
              </div>
            </div>
            <div className="card second">
              <div className="condition-icon">
                <span className="iconify tomIconify" data-icon="bx:wind"></span>
                <p>Wind</p>
              </div>
              <div className="condition-detail">
                <p>{tomWindSpeed} <span>km/h</span></p>
              </div>
            </div>
            <div className="card third">
              <div className="condition-icon">
                <span
                  className="iconify tomIconify"
                  data-icon="carbon:uv-index-alt"
                ></span>
                <p>UV Index</p>
              </div>
              <div className="condition-detail">
                <p>{tomUVindex}</p>
              </div>
            </div>
            <div className="card fourth">
              <div className="condition-icon">
                <span
                  className="iconify tomIconify"
                  data-icon="dashicons:visibility"
                ></span>
                <p>Visibility</p>
              </div>
              <div className="condition-detail">
                <p>10 <span>km</span></p>
              </div>
            </div>
          </div>
          {/* Sunrise and Sunset */}
          <div>
            <div className="sunrise-heading div">
              <p>Sunrise & Sunset</p>
            </div>
            <div className="riseSet-container">
              <div className="sun-rise set-condition">
                <div className="set-condition-icon">
                <img src="./Images/sunrise.png" className="iconify" alt="Sunrise" />
                  <p>Sunrise</p>
                </div>
                <div className="set-condition-detail">
                  <p>{sunriseTime}</p>
                </div>
              </div>
              <div className="sun-set set-condition">
                <div className="set-condition-icon">
                <img src="./Images/sunset.png" className="iconify" alt="Sunset" />
                  <p>Sunset</p>
                </div>
                <div className="set-condition-detail">
                  <p>{sunsetTime}</p>
                </div>
              </div>
            </div>
          </div>
          {/* For Moonrise and Moonset */}
          <div>
            <div className="sunrise-heading div">
              <p>Moonrise & Moonset</p>
            </div>
            <div className="riseSet-container">
              <div className="sun-rise set-condition">
                <div className="set-condition-icon">
                  <img src="./Images/moonrise.png" className="iconify" alt="Moonrise" />
                  <p>Sunrise</p>
                </div>
                <div className="set-condition-detail">
                  <p>{sunriseTime}</p>
                </div>
              </div>
              <div className="sun-set set-condition">
                <div className="set-condition-icon">
                <img src="./Images/moonset.png" className="iconify" alt="Moonset" />
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
