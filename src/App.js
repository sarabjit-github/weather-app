import { WeatherToday } from "./MyComponents/WeatherToday";
import { WeatherTomorrow } from "./MyComponents/WeatherTomorrow";
import { Weather7Days } from "./MyComponents/Weather7Days";

import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { useFullPageLoader } from "./Hooks/useFullPageLoader";
import { useWeatherPageLoader } from "./Hooks/useWeatherPageLoader";
import { GoSearch } from "react-icons/go";

function App() {
  const [searchValue, setSearchValue] = useState("Hoshiarpur");
  const [coordinateStore, setCoordinateStore] = useState({
    latitude: 31.534657,
    longitude: 75.898853,
  });
  const [weatherInfo, setWeatherInfo] = useState({});
  const [weatherDetailMap, setWeatherDetailMap] = useState({});
  const [cityName, setCityName] = useState({});
  // Tomorrow Weather State
  const [tomWeatherInfo, setTomWeatherInfo] = useState({});
  const [tomTempInfo, setTomTempInfo] = useState({});
  const [tomFeelInfo, setTomFeelInfo] = useState({});
  const [tomWeatherMoodInfo, setTomWeatherMoodInfo] = useState({});
  // >>>>>>>>>>>nextDay1<<<<<<<<<<<
  const [nextDay1WeatherInfo, setNextDay1WeatherInfo] = useState({});
  const [nextDay1TempInfo, setNextDay1TempInfo] = useState({});
  const [nextDay1WeatherMoodInfo, setNextDay1WeatherMoodInfo] = useState({});
  // >>>>>>>>>>>nextDay2<<<<<<<<<<<
  const [nextDay2WeatherInfo, setNextDay2WeatherInfo] = useState({});
  const [nextDay2TempInfo, setNextDay2TempInfo] = useState({});
  const [nextDay2WeatherMoodInfo, setNextDay2WeatherMoodInfo] = useState({});
  // >>>>>>>>>>>nextDay3<<<<<<<<<<<
  const [nextDay3WeatherInfo, setNextDay3WeatherInfo] = useState({});
  const [nextDay3TempInfo, setNextDay3TempInfo] = useState({});
  const [nextDay3WeatherMoodInfo, setNextDay3WeatherMoodInfo] = useState({});
  // >>>>>>>>>>>nextDay4<<<<<<<<<<<
  const [nextDay4WeatherInfo, setNextDay4WeatherInfo] = useState({});
  const [nextDay4TempInfo, setNextDay4TempInfo] = useState({});
  const [nextDay4WeatherMoodInfo, setNextDay4WeatherMoodInfo] = useState({});
  // >>>>>>>>>>>nextDay5<<<<<<<<<<<
  const [nextDay5WeatherInfo, setNextDay5WeatherInfo] = useState({});
  const [nextDay5TempInfo, setNextDay5TempInfo] = useState({});
  const [nextDay5WeatherMoodInfo, setNextDay5WeatherMoodInfo] = useState({});
  // >>>>>>>>>>>nextDay6<<<<<<<<<<<
  const [nextDay6WeatherInfo, setNextDay6WeatherInfo] = useState({});
  const [nextDay6TempInfo, setNextDay6TempInfo] = useState({});
  const [nextDay6WeatherMoodInfo, setNextDay6WeatherMoodInfo] = useState({});
  // >>>>>>>>>>>nextDay7<<<<<<<<<<<
  const [nextDay7WeatherInfo, setNextDay7WeatherInfo] = useState({});
  const [nextDay7TempInfo, setNextDay7TempInfo] = useState({});
  const [nextDay7WeatherMoodInfo, setNextDay7WeatherMoodInfo] = useState({});

  //>>>>>>>>> for Active class <<<<<<<<<<<<<
  const [todayClass, setTodayClass] = useState("active");
  const [tomorrowClass, setTomorrowClass] = useState("");
  const [daysClass, setDaysClass] = useState("");

  // States for changing background-colors
  const [headerColor, setHeaderColor] = useState(
    "linear-gradient(to right,rgb(145 123 255),rgb(190 92 255))"
  );
  const [appColor, setAppColor] = useState(
    "linear-gradient(to right,rgba(158, 138, 255, 1),rgba(205, 130, 255, 1))"
  );

  const headerStyle = {
    background: `${headerColor}`,
  };
  const appStyle = {
    background: `${appColor}`,
  };

  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [weatherLoader, showWeatherLoader, hideWeatherLoader] =
    useWeatherPageLoader();

  // coordinate (lon, lat) api <= city name
  let getCoordinates = async () => {
    showLoader();
    try {
      let cityApiUrl = `http://api.positionstack.com/v1/forward?access_key=e6826afada8df1c29a21ccf187ab1193&query=${searchValue}&limit=1&output=json`;
      let resCityApi = await fetch(cityApiUrl);
      const resCityApiData = await resCityApi.json();
      hideLoader();
      const { latitude, longitude } = resCityApiData.data[0];
      const latLon = {
        latitude,
        longitude,
      };
      const { name: cityName, country_code } = resCityApiData.data[0];
      const myCityName = { cityName, country_code };
      setCityName(myCityName);
      setCoordinateStore(latLon);

      // for weather Data Api
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {

  // }, [])

  // fetching weather data details
  let getWeatherData = async () => {
    // getCoordinates();
    showWeatherLoader();
    let weatherDataApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinateStore.latitude}&lon=${coordinateStore.longitude}&units=metric&exclude=minutely,hourly&appid=93c598c1f4e237f31d8fef66f143dcd6`;
    let resWeatherApi = await fetch(weatherDataApiUrl);
    const resWeatherApiData = await resWeatherApi.json();
    hideWeatherLoader();
    const {
      temp,
      humidity,
      uvi,
      visibility,
      feels_like,
      wind_speed,
      sunrise,
      sunset,
      dt: locationTime,
    } = resWeatherApiData.current;
    const myWeatherDetail = {
      temp,
      humidity,
      visibility,
      feels_like,
      uvi,
      wind_speed,
      sunrise,
      sunset,
      locationTime,
    };
    const { main: weatherMood } = resWeatherApiData.current.weather[0];
    const weatherMoodState = { weatherMood };

    setWeatherInfo(myWeatherDetail);
    setWeatherDetailMap(weatherMoodState);

    // Tomorrow Weather Data
    const {
      dt: tomorrowTime,
      sunrise: tomSunrise,
      sunset: tomSunset,
      moonrise: tomMoonrise,
      moonset: tomMoonset,
      humidity: tomHumditiy,
      wind_speed: tomWindSpeed,
      uvi: tomUVindex,
    } = resWeatherApiData.daily[1];
    const {
      day: tomDayTemp,
      night: tomNightTemp,
      min: tomMinTemp,
      max: tomMaxTemp,
    } = resWeatherApiData.daily[1].temp;
    const {
      day: tomDayFeel,
      night: tomNightFeel,
      eve: tomEveFeel,
      morn: tomMornFeel,
    } = resWeatherApiData.daily[1].feels_like;
    const { main: tomWeatherMood } = resWeatherApiData.daily[1].weather[0];
    // for Object destructuring and states
    const tomWeatherDetail = {
      tomorrowTime,
      tomSunrise,
      tomSunset,
      tomMoonrise,
      tomMoonset,
      tomHumditiy,
      tomWindSpeed,
      tomUVindex,
    };
    const tomTempDetail = { tomDayTemp, tomNightTemp, tomMinTemp, tomMaxTemp };
    const tomFeelsDetail = {
      tomDayFeel,
      tomNightFeel,
      tomEveFeel,
      tomMornFeel,
    };
    const tomWeatherMoodState = { tomWeatherMood };

    // >>>>>>>>>>>nextDay1<<<<<<<<<<<
    const {
      dt: nextDay1Time,
      sunrise: nextDay1Sunrise,
      sunset: nextDay1Sunset,
      moonrise: nextDay1Moonrise,
      moonset: nextDay1Moonset,
      humidity: nextDay1Humditiy,
      wind_speed: nextDay1WindSpeed,
      uvi: nextDay1UVindex,
    } = resWeatherApiData.daily[2];
    const {
      day: nextDay1DayTemp,
      night: nextDay1NightTemp,
      min: nextDay1MinTemp,
      max: nextDay1MaxTemp,
    } = resWeatherApiData.daily[2].temp;
    const { main: nextDay1WeatherMood } = resWeatherApiData.daily[2].weather[0];
    // for Object destructuring and states
    const nextDay1WeatherDetail = {
      nextDay1Time,
      nextDay1Sunrise,
      nextDay1Sunset,
      nextDay1Moonrise,
      nextDay1Moonset,
      nextDay1Humditiy,
      nextDay1WindSpeed,
      nextDay1UVindex,
    };
    const nextDay1TempDetail = {
      nextDay1DayTemp,
      nextDay1NightTemp,
      nextDay1MinTemp,
      nextDay1MaxTemp,
    };
    const nextDay1WeatherMoodState = { nextDay1WeatherMood };

    // >>>>>>>>>>>nextDay2<<<<<<<<<<<
    const {
      dt: nextDay2Time,
      sunrise: nextDay2Sunrise,
      sunset: nextDay2Sunset,
      moonrise: nextDay2Moonrise,
      moonset: nextDay2Moonset,
      humidity: nextDay2Humditiy,
      wind_speed: nextDay2WindSpeed,
      uvi: nextDay2UVindex,
    } = resWeatherApiData.daily[3];
    const {
      day: nextDay2DayTemp,
      night: nextDay2NightTemp,
      min: nextDay2MinTemp,
      max: nextDay2MaxTemp,
    } = resWeatherApiData.daily[3].temp;
    const { main: nextDay2WeatherMood } = resWeatherApiData.daily[3].weather[0];
    // for Object destructuring and states
    const nextDay2WeatherDetail = {
      nextDay2Time,
      nextDay2Sunrise,
      nextDay2Sunset,
      nextDay2Moonrise,
      nextDay2Moonset,
      nextDay2Humditiy,
      nextDay2WindSpeed,
      nextDay2UVindex,
    };
    const nextDay2TempDetail = {
      nextDay2DayTemp,
      nextDay2NightTemp,
      nextDay2MinTemp,
      nextDay2MaxTemp,
    };
    const nextDay2WeatherMoodState = { nextDay2WeatherMood };

    // >>>>>>>>>>>nextDay3<<<<<<<<<<<
    const {
      dt: nextDay3Time,
      sunrise: nextDay3Sunrise,
      sunset: nextDay3Sunset,
      moonrise: nextDay3Moonrise,
      moonset: nextDay3Moonset,
      humidity: nextDay3Humditiy,
      wind_speed: nextDay3WindSpeed,
      uvi: nextDay3UVindex,
    } = resWeatherApiData.daily[4];
    const {
      day: nextDay3DayTemp,
      night: nextDay3NightTemp,
      min: nextDay3MinTemp,
      max: nextDay3MaxTemp,
    } = resWeatherApiData.daily[4].temp;
    const { main: nextDay3WeatherMood } = resWeatherApiData.daily[4].weather[0];
    // for Object destructuring and states
    const nextDay3WeatherDetail = {
      nextDay3Time,
      nextDay3Sunrise,
      nextDay3Sunset,
      nextDay3Moonrise,
      nextDay3Moonset,
      nextDay3Humditiy,
      nextDay3WindSpeed,
      nextDay3UVindex,
    };
    const nextDay3TempDetail = {
      nextDay3DayTemp,
      nextDay3NightTemp,
      nextDay3MinTemp,
      nextDay3MaxTemp,
    };
    const nextDay3WeatherMoodState = { nextDay3WeatherMood };

    // >>>>>>>>>>>nextDay4<<<<<<<<<<<
    const {
      dt: nextDay4Time,
      sunrise: nextDay4Sunrise,
      sunset: nextDay4Sunset,
      moonrise: nextDay4Moonrise,
      moonset: nextDay4Moonset,
      humidity: nextDay4Humditiy,
      wind_speed: nextDay4WindSpeed,
      uvi: nextDay4UVindex,
    } = resWeatherApiData.daily[5];
    const {
      day: nextDay4DayTemp,
      night: nextDay4NightTemp,
      min: nextDay4MinTemp,
      max: nextDay4MaxTemp,
    } = resWeatherApiData.daily[5].temp;
    const { main: nextDay4WeatherMood } = resWeatherApiData.daily[5].weather[0];
    // for Object destructuring and states
    const nextDay4WeatherDetail = {
      nextDay4Time,
      nextDay4Sunrise,
      nextDay4Sunset,
      nextDay4Moonrise,
      nextDay4Moonset,
      nextDay4Humditiy,
      nextDay4WindSpeed,
      nextDay4UVindex,
    };
    const nextDay4TempDetail = {
      nextDay4DayTemp,
      nextDay4NightTemp,
      nextDay4MinTemp,
      nextDay4MaxTemp,
    };
    const nextDay4WeatherMoodState = { nextDay4WeatherMood };

    // >>>>>>>>>>>nextDay5<<<<<<<<<<<
    const {
      dt: nextDay5Time,
      sunrise: nextDay5Sunrise,
      sunset: nextDay5Sunset,
      moonrise: nextDay5Moonrise,
      moonset: nextDay5Moonset,
      humidity: nextDay5Humditiy,
      wind_speed: nextDay5WindSpeed,
      uvi: nextDay5UVindex,
    } = resWeatherApiData.daily[6];
    const {
      day: nextDay5DayTemp,
      night: nextDay5NightTemp,
      min: nextDay5MinTemp,
      max: nextDay5MaxTemp,
    } = resWeatherApiData.daily[6].temp;
    const { main: nextDay5WeatherMood } = resWeatherApiData.daily[6].weather[0];
    // for Object destructuring and states
    const nextDay5WeatherDetail = {
      nextDay5Time,
      nextDay5Sunrise,
      nextDay5Sunset,
      nextDay5Moonrise,
      nextDay5Moonset,
      nextDay5Humditiy,
      nextDay5WindSpeed,
      nextDay5UVindex,
    };
    const nextDay5TempDetail = {
      nextDay5DayTemp,
      nextDay5NightTemp,
      nextDay5MinTemp,
      nextDay5MaxTemp,
    };
    const nextDay5WeatherMoodState = { nextDay5WeatherMood };

    // >>>>>>>>>>>nextDay6<<<<<<<<<<<
    const {
      dt: nextDay6Time,
      sunrise: nextDay6Sunrise,
      sunset: nextDay6Sunset,
      moonrise: nextDay6Moonrise,
      moonset: nextDay6Moonset,
      humidity: nextDay6Humditiy,
      wind_speed: nextDay6WindSpeed,
      uvi: nextDay6UVindex,
    } = resWeatherApiData.daily[7];
    const {
      day: nextDay6DayTemp,
      night: nextDay6NightTemp,
      min: nextDay6MinTemp,
      max: nextDay6MaxTemp,
    } = resWeatherApiData.daily[7].temp;
    const { main: nextDay6WeatherMood } = resWeatherApiData.daily[7].weather[0];
    // for Object destructuring and states
    const nextDay6WeatherDetail = {
      nextDay6Time,
      nextDay6Sunrise,
      nextDay6Sunset,
      nextDay6Moonrise,
      nextDay6Moonset,
      nextDay6Humditiy,
      nextDay6WindSpeed,
      nextDay6UVindex,
    };
    const nextDay6TempDetail = {
      nextDay6DayTemp,
      nextDay6NightTemp,
      nextDay6MinTemp,
      nextDay6MaxTemp,
    };
    const nextDay6WeatherMoodState = { nextDay6WeatherMood };

    // >>>>>>>>>>>nextDay7<<<<<<<<<<<
    const {
      dt: nextDay7Time,
      sunrise: nextDay7Sunrise,
      sunset: nextDay7Sunset,
      moonrise: nextDay7Moonrise,
      moonset: nextDay7Moonset,
      humidity: nextDay7Humditiy,
      wind_speed: nextDay7WindSpeed,
      uvi: nextDay7UVindex,
    } = resWeatherApiData.daily[7];
    const {
      day: nextDay7DayTemp,
      night: nextDay7NightTemp,
      min: nextDay7MinTemp,
      max: nextDay7MaxTemp,
    } = resWeatherApiData.daily[7].temp;
    const { main: nextDay7WeatherMood } = resWeatherApiData.daily[7].weather[0];
    // for Object destructuring and states
    const nextDay7WeatherDetail = {
      nextDay7Time,
      nextDay7Sunrise,
      nextDay7Sunset,
      nextDay7Moonrise,
      nextDay7Moonset,
      nextDay7Humditiy,
      nextDay7WindSpeed,
      nextDay7UVindex,
    };
    const nextDay7TempDetail = {
      nextDay7DayTemp,
      nextDay7NightTemp,
      nextDay7MinTemp,
      nextDay7MaxTemp,
    };
    const nextDay7WeatherMoodState = { nextDay7WeatherMood };

    setTomWeatherInfo(tomWeatherDetail);
    setTomTempInfo(tomTempDetail);
    setTomFeelInfo(tomFeelsDetail);
    setTomWeatherMoodInfo(tomWeatherMoodState);
    // >>>>>>>>>>nextDay1<<<<<<<<<<<<
    setNextDay1WeatherInfo(nextDay1WeatherDetail);
    setNextDay1TempInfo(nextDay1TempDetail);
    setNextDay1WeatherMoodInfo(nextDay1WeatherMoodState);
    // >>>>>>>>>>nextDay2<<<<<<<<<<<<
    setNextDay2WeatherInfo(nextDay2WeatherDetail);
    setNextDay2TempInfo(nextDay2TempDetail);
    setNextDay2WeatherMoodInfo(nextDay2WeatherMoodState);
    // >>>>>>>>>>nextDay3<<<<<<<<<<<<
    setNextDay3WeatherInfo(nextDay3WeatherDetail);
    setNextDay3TempInfo(nextDay3TempDetail);
    setNextDay3WeatherMoodInfo(nextDay3WeatherMoodState);
    // >>>>>>>>>>nextDay4<<<<<<<<<<<<
    setNextDay4WeatherInfo(nextDay4WeatherDetail);
    setNextDay4TempInfo(nextDay4TempDetail);
    setNextDay4WeatherMoodInfo(nextDay4WeatherMoodState);
    // >>>>>>>>>>nextDay5<<<<<<<<<<<<
    setNextDay5WeatherInfo(nextDay5WeatherDetail);
    setNextDay5TempInfo(nextDay5TempDetail);
    setNextDay5WeatherMoodInfo(nextDay5WeatherMoodState);
    // >>>>>>>>>>nextDay6<<<<<<<<<<<<
    setNextDay6WeatherInfo(nextDay6WeatherDetail);
    setNextDay6TempInfo(nextDay6TempDetail);
    setNextDay6WeatherMoodInfo(nextDay6WeatherMoodState);
    // >>>>>>>>>>nextDay7<<<<<<<<<<<<
    setNextDay7WeatherInfo(nextDay7WeatherDetail);
    setNextDay7TempInfo(nextDay7TempDetail);
    setNextDay7WeatherMoodInfo(nextDay7WeatherMoodState);

    // const {}
  };
  

  useEffect(() => {
    getCoordinates();
    getWeatherData();
    
    // console.log(coordinateStore.latitude)
  }, []);

  // let getLatLon = ()=>{
  // console.log(coordinateStore)
  // console.log(resCityApiData)
  // }
  // console.log(coordinateStore)


  let todayActive = () => {
    if (todayClass === "") {
      setTodayClass("active");
      setTomorrowClass("");
      setDaysClass("");
      setHeaderColor(
        "linear-gradient(to right,rgb(145 123 255),rgb(190 92 255))"
      );
      setAppColor(
        "linear-gradient(to right,rgba(158, 138, 255, 1),rgba(205, 130, 255, 1))"
      );

      // console.log(window.location.pathname)
    }
  };
  let tomorrowActive = () => {
    if (tomorrowClass === "") {
      setTomorrowClass("active");
      setTodayClass("");
      setDaysClass("");
      setHeaderColor(
        "linear-gradient(to right, rgb(74 210 255), rgb(72 134 237))"
      );
      setAppColor(
        "linear-gradient(to right, rgb(126 213 255), rgb(72 149 255))"
      );
    }
  };
  let daysActive = () => {
    if (daysClass === "" ) {
      setDaysClass("active");
      setTomorrowClass("");
      setTodayClass("");
      setHeaderColor(
        "linear-gradient(to right, rgb(205 94 133), rgb(235 174 216))"
      );
      setAppColor(
        "linear-gradient(to right, rgb(210 113 148), rgb(242 195 224))"
      );
    }
  };

  


  return (
    <>
      <div className="app" style={appStyle}>
        <header className="header" style={headerStyle}>
          <div className="header-container">
            <div className="search-bar">
              <input
                type="text"
                id="search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search here..."
              />
              <button
                onClick={getCoordinates}
                title="Ready to fetch your location"
                className="btn"
                style={headerStyle}
              >
                Ready
              </button>
              <GoSearch
                id="searchIcon"
                title="Search or Update weather"
                onClick={getWeatherData}
              />
              {/* <button id="searchIcon" title="Search" onClick={getWeatherData} >Go</button> */}
            </div>
            <div className="header-menu">
              <Link to="/" className={`${todayClass}`} onClick={todayActive}>
                Today
              </Link>
              <Link
                to="/WeatherTomorrow"
                className={`${tomorrowClass}`}
                onClick={tomorrowActive}
              >
                Tomorrow
              </Link>
              <Link
                to="/Weather7Days"
                className={`${daysClass}`}
                onClick={daysActive}
              >
                6 days
              </Link>
            </div>
          </div>
        </header>
        {loader}
        {weatherLoader}
        
        {/* <Header /> */}
        {/* <WeatherToday /> */}
        <Routes>
          <Route
            path="/"
            element={
              <WeatherToday
                {...coordinateStore}
                {...weatherInfo}
                {...weatherDetailMap}
                {...cityName}
              />
            }
          />
          <Route
            path="/WeatherTomorrow"
            element={
              <WeatherTomorrow
                {...weatherInfo}
                {...tomWeatherInfo}
                {...tomFeelInfo}
                {...tomTempInfo}
                {...tomWeatherMoodInfo}
              />
            }
          />
          <Route
            path="/Weather7Days"
            element={
              <Weather7Days
                {...nextDay1TempInfo}
                {...nextDay1WeatherInfo}
                {...nextDay1WeatherMoodInfo}
                {...nextDay2TempInfo}
                {...nextDay2WeatherInfo}
                {...nextDay2WeatherMoodInfo}
                {...nextDay3TempInfo}
                {...nextDay3WeatherInfo}
                {...nextDay3WeatherMoodInfo}
                {...nextDay4TempInfo}
                {...nextDay4WeatherInfo}
                {...nextDay4WeatherMoodInfo}
                {...nextDay5TempInfo}
                {...nextDay5WeatherInfo}
                {...nextDay5WeatherMoodInfo}
                {...nextDay6TempInfo}
                {...nextDay6WeatherInfo}
                {...nextDay6WeatherMoodInfo}
                {...nextDay7TempInfo}
                {...nextDay7WeatherInfo}
                {...nextDay7WeatherMoodInfo}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
