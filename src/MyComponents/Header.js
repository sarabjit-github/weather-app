// import React, { useState, useEffect } from "react";
// import { GoSearch } from "react-icons/go";
// import { WeatherToday } from "./WeatherToday";
// import { Loader } from "./Loader";
// import { useFullPageLoader } from "../Hooks/useFullPageLoader";
// import { useWeatherPageLoader } from "../Hooks/useWeatherPageLoader";
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// export const Header = () => {
  // const [searchValue, setSearchValue] = useState("Hoshiarpur");
  // const [coordinateStore, setCoordinateStore] = useState({
  //   latitude: 31.534657,
  //   longitude: 75.898853,
  // });
  // const [weatherInfo, setWeatherInfo] = useState({});
  // const [weatherDetailMap, setWeatherDetailMap] = useState({});
  // const [cityName, setCityName] = useState({});

  // const [loader, showLoader, hideLoader] = useFullPageLoader();
  // const [weatherLoader, showWeatherLoader, hideWeatherLoader] = useWeatherPageLoader();

  // // coordinate (lon, lat) api <= city name
  // let getCoordinates = async () => {
  //   showLoader();
  //   try {
  //     let cityApiUrl = `http://api.positionstack.com/v1/forward?access_key=e6826afada8df1c29a21ccf187ab1193&query=${searchValue}&limit=1&output=json`;
  //     let resCityApi = await fetch(cityApiUrl);
  //     const resCityApiData = await resCityApi.json();
  //     hideLoader();
  //     const { latitude, longitude } = resCityApiData.data[0];
  //     const latLon = {
  //       latitude,
  //       longitude,
  //     };
  //     const { name: cityName, country_code } = resCityApiData.data[0];
  //     const myCityName = { cityName, country_code };
  //     setCityName(myCityName);
  //     setCoordinateStore(latLon);

  //     // for weather Data Api
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // useEffect(() => {
    
  // // }, [])
  

  // // fetching weather data details
  // let getWeatherData = async () => {
  //   // getCoordinates();
  //   showWeatherLoader();
  //   let weatherDataApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinateStore.latitude}&lon=${coordinateStore.longitude}&units=metric&exclude=minutely,hourly&appid=93c598c1f4e237f31d8fef66f143dcd6`;
  //     let resWeatherApi = await fetch(weatherDataApiUrl);
  //     const resWeatherApiData = await resWeatherApi.json();
  //     hideWeatherLoader();
  //     const {
  //       temp,
  //       humidity,
  //       uvi,
  //       visibility,
  //       feels_like,
  //       wind_speed,
  //       sunrise,
  //       sunset,
  //       dt : locationTime
  //     } = resWeatherApiData.current;

  //     const myWeatherDetail = {
  //       temp,
  //       humidity,
  //       visibility,
  //       feels_like,
  //       uvi,
  //       wind_speed,
  //       sunrise,
  //       sunset,
  //       locationTime
  //     };
  //     const { main: weatherMood } = resWeatherApiData.current.weather[0];
  //     const weatherMoodState = { weatherMood };

  //     setWeatherInfo(myWeatherDetail);
  //     setWeatherDetailMap(weatherMoodState);
  // };

  // useEffect(() => {
  //   getCoordinates();
  //   getWeatherData();
  //   // console.log(coordinateStore.latitude)
  // }, []);

  // // let getLatLon = ()=>{
  // // console.log(coordinateStore)
  // // console.log(resCityApiData)
  // // }
  // // console.log(coordinateStore)

  // const [todayClass, setTodayClass] = useState("active");
  // const [tomorrowClass, setTomorrowClass] = useState("");
  // const [daysClass, setDaysClass] = useState("");
  // let todayActive = () => {
  //   if (todayClass === "") {
  //     setTodayClass("active");
  //     setTomorrowClass("");
  //     setDaysClass("");
  //   }
  // };
  // let tomorrowActive = () => {
  //   if (tomorrowClass === "") {
  //     setTomorrowClass("active");
  //     setTodayClass("");
  //     setDaysClass("");
  //   }
  // };
  // let daysActive = () => {
  //   if (daysClass === "") {
  //     setDaysClass("active");
  //     setTomorrowClass("");
  //     setTodayClass("");
  //   }
  // };

  // return (
  //   <>
 
      {/* <header className="header">
        <div className="header-container">
          <div className="search-bar">
            <input
              type="text"
              id="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search here..."
            />
            <button onClick={getCoordinates} title="Ready to fetch your location" className="btn">
              Ready
            </button>
            <GoSearch id="searchIcon" title="Search or Update weather" onClick={getWeatherData} /> */}
            {/* <button id="searchIcon" title="Search" onClick={getWeatherData} >Go</button> */}
          {/* </div>
          <div className="header-menu">
            <Link to="/" className={`${todayClass}`} onClick={todayActive}>
              Today
            </Link>
            <Link to="/WeatherTomorrow" className={`${tomorrowClass}`} onClick={tomorrowActive}>
              Tomorrow
            </Link>
            <Link to="/Weather7Days" className={`${daysClass}`} onClick={daysActive}>
              7 days
            </Link>
          </div>
        </div>
      </header> */}
      {/* <WeatherToday
        {...coordinateStore}
        {...weatherInfo}
        {...weatherDetailMap}
        {...cityName}
      /> */}
      {/* {loader}
      {weatherLoader} */}
    {/* </>
  );
}; */}
