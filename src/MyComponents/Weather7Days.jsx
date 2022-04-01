import React, {useState} from "react";

export const Weather7Days = ({nextDay1Time,
  nextDay1Sunrise,
  nextDay1Sunset,
  nextDay1Moonrise,
  nextDay1Moonset,
  nextDay1Humditiy,
  nextDay1WindSpeed,
  nextDay1UVindex,
  nextDay1DayTemp,
  nextDay1NightTemp,
  nextDay1MinTemp,
  nextDay1MaxTemp,
  nextDay1WeatherMood,
  nextDay2Sunrise,
  nextDay2Sunset,
  nextDay2Moonrise,
  nextDay2Moonset,
  nextDay2Humditiy,
  nextDay2WindSpeed,
  nextDay2UVindex,
  nextDay2DayTemp,
  nextDay2NightTemp,
  nextDay2MinTemp,
  nextDay2MaxTemp,
  nextDay2WeatherMood,
  nextDay3Sunrise,
  nextDay3Sunset,
  nextDay3Moonrise,
  nextDay3Moonset,
  nextDay3Humditiy,
  nextDay3WindSpeed,
  nextDay3UVindex,
  nextDay3DayTemp,
  nextDay3NightTemp,
  nextDay3MinTemp,
  nextDay3MaxTemp,
  nextDay3WeatherMood,
  nextDay4Sunrise,
  nextDay4Sunset,
  nextDay4Moonrise,
  nextDay4Moonset,
  nextDay4Humditiy,
  nextDay4WindSpeed,
  nextDay4UVindex,
  nextDay4DayTemp,
  nextDay4NightTemp,
  nextDay4MinTemp,
  nextDay4MaxTemp,
  nextDay4WeatherMood,
  nextDay5Sunrise,
  nextDay5Sunset,
  nextDay5Moonrise,
  nextDay5Moonset,
  nextDay5Humditiy,
  nextDay5WindSpeed,
  nextDay5UVindex,
  nextDay5DayTemp,
  nextDay5NightTemp,
  nextDay5MinTemp,
  nextDay5MaxTemp,
  nextDay5WeatherMood,
  nextDay6Sunrise,
  nextDay6Sunset,
  nextDay6Moonrise,
  nextDay6Moonset,
  nextDay6Humditiy,
  nextDay6WindSpeed,
  nextDay6UVindex,
  nextDay6DayTemp,
  nextDay6NightTemp,
  nextDay6MinTemp,
  nextDay6MaxTemp,
  nextDay6WeatherMood,
  nextDay2Time,
  nextDay3Time,
  nextDay4Time,
  nextDay5Time,
  nextDay6Time,
}) => {


  // const [weatherMoodIcon1, setWeatherMoodIcon1] = useState({})
  
  // For Accordion

  // const [oneBoxHeight, setOneBoxHeight] = useState("second")
  // let boxHeight = window.screen.width <= 499 ? "5.5rem":"5.8rem";

  const [boxHeight1, setBoxHeight1] = useState("5.8rem");
  const [boxHeight2, setBoxHeight2] = useState("5.8rem");
  const [boxHeight3, setBoxHeight3] = useState("5.8rem");
  const [boxHeight4, setBoxHeight4] = useState("5.8rem");
  const [boxHeight5, setBoxHeight5] = useState("5.8rem");
  const [boxHeight6, setBoxHeight6] = useState("5.8rem");

  const nextDayBoxStyle1 = { height: `${boxHeight1}`};
  const nextDayBoxStyle2 = { height: `${boxHeight2}`};
  const nextDayBoxStyle3 = { height: `${boxHeight3}`};
  const nextDayBoxStyle4 = { height: `${boxHeight4}`};
  const nextDayBoxStyle5 = { height: `${boxHeight5}`};
  const nextDayBoxStyle6 = { height: `${boxHeight6}`};


  // for Accordion
  let viewFullBox1 = ()=>{
    if(boxHeight1 === "5.8rem"){
      setBoxHeight1("14.5rem")
    }
    else{
      setBoxHeight1("5.8rem")
    }
  }
  let viewFullBox2 = ()=>{
    if(boxHeight2 === "5.8rem"){
      setBoxHeight2("14.5rem")
    }
    else{
      setBoxHeight2("5.8rem")
    }
  }
  let viewFullBox3 = ()=>{
    if(boxHeight3 === "5.8rem"){
      setBoxHeight3("14.5rem")
    }
    else{
      setBoxHeight3("5.8rem")
    }
  }
  let viewFullBox4 = ()=>{
    if(boxHeight4 === "5.8rem"){
      setBoxHeight4("14.5rem")
    }
    else{
      setBoxHeight4("5.8rem")
    }
  }
  let viewFullBox5 = ()=>{
    if(boxHeight5 === "5.8rem"){
      setBoxHeight5("14.5rem")
    }
    else{
      setBoxHeight5("5.8rem")
    }
  }
  let viewFullBox6 = ()=>{
    if(boxHeight6 === "5.8rem"){
      setBoxHeight6("14.5rem")
    }
    else{
      setBoxHeight6("5.8rem")
    }
  }

  // Accordion ended

  // nextDay1 date and time
  let day1Date = new Date(nextDay1Time*1000).getDate();
  // nextDay2 date and time
  let day2Date = new Date(nextDay2Time*1000).getDate();
  // nextDay3 date and time
  let day3Date = new Date(nextDay3Time*1000).getDate();
  // nextDay4 date and time
  let day4Date = new Date(nextDay4Time*1000).getDate();
  // nextDay5 date and time
  let day5Date = new Date(nextDay5Time*1000).getDate();
  // nextDay6 date and time
  let day6Date = new Date(nextDay6Time*1000).getDate();

  // get month
  let nextMonth = (dayMonth) => {
    // let day1Month = new Date(nextDay1Time*1000).getMonth();
    let month;
    switch (dayMonth) {
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
  }

  // get day
  let upcomingDay = (nextDay)=>{
    let dayTom ;
    switch (nextDay) {
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

  // let newLocationTime = new Date(locationTime * 1000).getHours();
  // change weather condtion icon
  let changeWeatherMoodIcon = (weatherMood)=>{
    let weatherIcon;
      switch (weatherMood) {
        case "Clouds":
          weatherIcon = "clouds"
          break;
        case "Smoke":
          weatherIcon = "smoke"
          break;
        case "Snow":
          weatherIcon = "SnowDay"
          break;
        case "Clear":
          weatherIcon = "SunnyDay"
          break;
        case "Mist":
          weatherIcon = "MistDay"
          break;
        case "Rain":
          weatherIcon = "RainDay"
          break;
        case "Haze":
          weatherIcon = "MistDay"
          break;
        case "Windy":
          weatherIcon = "WindyDay"
          break;

        default:
          weatherIcon = "SunnyDay"
          break;
      }
      return weatherIcon;

  }


  return (
    <div className="weather-today">
      <div className="next-days-container">
        {/* Box Start */}
        <div className="nextDay-box first" style={nextDayBoxStyle1} onClick={viewFullBox1}>
          <div className="nextDay">
            <div className="nextDay-detail">
              <p>{day1Date} {nextMonth(new Date(nextDay1Time*1000).getMonth())}, {upcomingDay(new Date(nextDay1Time*1000).getDay())}</p>
              <p>{nextDay1WeatherMood}</p>
            </div>
            <div className="nextDay-icon">
              <div className="nextDay-img">
                <img src={`../Images/${changeWeatherMoodIcon(nextDay1WeatherMood)}.png`} alt="icon" />
              </div>
              <div className="nextDay-temp nextDay-detail">
                <p>{Math.ceil(nextDay1DayTemp)}°</p>
                <p>{Math.ceil(nextDay1NightTemp)}°</p>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-container">
              <div className="temp-content flex-content">
                <p><span>Min :&nbsp;</span> {nextDay1MinTemp} °C</p>
                <p><span>Max :&nbsp;</span> {nextDay1MaxTemp} °C</p>
              </div>
              <div className="weatherCondition-content flex-content">
                <p><span>Wind :&nbsp;</span> {nextDay1WindSpeed} km/h</p>
                <p><span>Humidity :&nbsp;</span> {nextDay1Humditiy}%</p>
                <p><span>UV index :&nbsp;</span> {nextDay1UVindex}</p>
              </div>
              <div className="sunrise-content flex-content">
                <p><span>Sunrise :&nbsp;</span> {new Date(nextDay1Sunrise*1000).toLocaleTimeString()}</p>
                <p><span>Sunset :&nbsp;</span> {new Date(nextDay1Sunset*1000).toLocaleTimeString()}</p>
              </div>
              <div className="moonrise-content flex-content">
                <p><span>Moonrise :&nbsp;</span> {new Date(nextDay1Moonrise*1000).toLocaleTimeString()}</p>
                <p><span>Moonset :&nbsp;</span> {new Date(nextDay1Moonset*1000).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Box Ends */}
        {/* Box Start */}
        <div className="nextDay-box first" style={nextDayBoxStyle2} onClick={viewFullBox2}>
          <div className="nextDay">
            <div className="nextDay-detail">
              <p>{day2Date} {nextMonth(new Date(nextDay2Time*1000).getMonth())}, {upcomingDay(new Date(nextDay2Time*1000).getDay())}</p>
              <p>{nextDay2WeatherMood}</p>
            </div>
            <div className="nextDay-icon">
              <div className="nextDay-img">
                <img src={`../Images/${changeWeatherMoodIcon(nextDay2WeatherMood)}.png`} alt="icon" />
              </div>
              <div className="nextDay-temp nextDay-detail">
                <p>{Math.ceil(nextDay2DayTemp)}°</p>
                <p>{Math.ceil(nextDay2NightTemp)}°</p>
              </div>
            </div>
          </div>
          <div className="content">
          <div className="content-container">
              <div className="temp-content flex-content">
                <p><span>Min :&nbsp;</span> {nextDay2MinTemp} °C</p>
                <p><span>Max :&nbsp;</span> {nextDay2MaxTemp} °C</p>
              </div>
              <div className="weatherCondition-content flex-content">
                <p><span>Wind :&nbsp;</span> {nextDay2WindSpeed} km/h</p>
                <p><span>Humidity :&nbsp;</span> {nextDay2Humditiy}%</p>
                <p><span>UV index :&nbsp;</span> {nextDay2UVindex}</p>
              </div>
              <div className="sunrise-content flex-content">
              <p><span>Sunrise :&nbsp;</span> {new Date(nextDay2Sunrise*1000).toLocaleTimeString()}</p>
                <p><span>Sunset :&nbsp;</span> {new Date(nextDay2Sunset*1000).toLocaleTimeString()}</p>
              </div>
              <div className="moonrise-content flex-content">
              <p><span>Moonrise :&nbsp;</span> {new Date(nextDay2Moonrise*1000).toLocaleTimeString()}</p>
                <p><span>Moonset :&nbsp;</span> {new Date(nextDay2Moonset*1000).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Box Ends */}
        <div className="nextDay-box first" style={nextDayBoxStyle3} onClick={viewFullBox3}>
          <div className="nextDay">
            <div className="nextDay-detail">
              <p>{day3Date} {nextMonth(new Date(nextDay3Time*1000).getMonth())}, {upcomingDay(new Date(nextDay3Time*1000).getDay())}</p>
              <p>{nextDay3WeatherMood}</p>
            </div>
            <div className="nextDay-icon">
              <div className="nextDay-img">
                <img src={`../Images/${changeWeatherMoodIcon(nextDay3WeatherMood)}.png`} alt="icon" />
              </div>
              <div className="nextDay-temp nextDay-detail">
              <p>{Math.ceil(nextDay3DayTemp)}°</p>
                <p>{Math.ceil(nextDay3NightTemp)}°</p>
              </div>
            </div>
          </div>
          <div className="content">
          <div className="content-container">
              <div className="temp-content flex-content">
                <p><span>Min :&nbsp;</span> {nextDay3MinTemp} °C</p>
                <p><span>Max :&nbsp;</span> {nextDay3MaxTemp} °C</p>
              </div>
              <div className="weatherCondition-content flex-content">
                <p><span>Wind :&nbsp;</span> {nextDay3WindSpeed} km/h</p>
                <p><span>Humidity :&nbsp;</span> {nextDay3Humditiy}%</p>
                <p><span>UV index :&nbsp;</span> {nextDay3UVindex}</p>
              </div>
              <div className="sunrise-content flex-content">
              <p><span>Sunrise :&nbsp;</span> {new Date(nextDay3Sunrise*1000).toLocaleTimeString()}</p>
                <p><span>Sunset :&nbsp;</span> {new Date(nextDay3Sunset*1000).toLocaleTimeString()}</p>
              </div>
              <div className="moonrise-content flex-content">
              <p><span>Moonrise :&nbsp;</span> {new Date(nextDay3Moonrise*1000).toLocaleTimeString()}</p>
                <p><span>Moonset :&nbsp;</span> {new Date(nextDay3Moonset*1000).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Box Ends */}
        <div className="nextDay-box first" style={nextDayBoxStyle4} onClick={viewFullBox4}>
          <div className="nextDay">
            <div className="nextDay-detail">
              <p>{day4Date} {nextMonth(new Date(nextDay4Time*1000).getMonth())}, {upcomingDay(new Date(nextDay4Time*1000).getDay())}</p>
              <p>{nextDay4WeatherMood}</p>
            </div>
            <div className="nextDay-icon">
              <div className="nextDay-img">
                <img src={`../Images/${changeWeatherMoodIcon(nextDay4WeatherMood)}.png`} alt="icon" />
              </div>
              <div className="nextDay-temp nextDay-detail">
              <p>{Math.ceil(nextDay4DayTemp)}°</p>
                <p>{Math.ceil(nextDay4NightTemp)}°</p>
              </div>
            </div>
          </div>
          <div className="content">
          <div className="content-container">
              <div className="temp-content flex-content">
                <p><span>Min :&nbsp;</span> {nextDay4MinTemp} °C</p>
                <p><span>Max :&nbsp;</span> {nextDay4MaxTemp} °C</p>
              </div>
              <div className="weatherCondition-content flex-content">
                <p><span>Wind :&nbsp;</span> {nextDay4WindSpeed} km/h</p>
                <p><span>Humidity :&nbsp;</span> {nextDay4Humditiy}%</p>
                <p><span>UV index :&nbsp;</span> {nextDay4UVindex}</p>
              </div>
              <div className="sunrise-content flex-content">
              <p><span>Sunrise :&nbsp;</span> {new Date(nextDay4Sunrise*1000).toLocaleTimeString()}</p>
                <p><span>Sunset :&nbsp;</span> {new Date(nextDay4Sunset*1000).toLocaleTimeString()}</p>
              </div>
              <div className="moonrise-content flex-content">
              <p><span>Moonrise :&nbsp;</span> {new Date(nextDay4Moonrise*1000).toLocaleTimeString()}</p>
                <p><span>Moonset :&nbsp;</span> {new Date(nextDay4Moonset*1000).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Box Ends */}
        <div className="nextDay-box first" style={nextDayBoxStyle5} onClick={viewFullBox5}>
          <div className="nextDay">
            <div className="nextDay-detail">
              <p>{day5Date} {nextMonth(new Date(nextDay5Time*1000).getMonth())}, {upcomingDay(new Date(nextDay5Time*1000).getDay())}</p>
              <p>{nextDay5WeatherMood}</p>
            </div>
            <div className="nextDay-icon">
              <div className="nextDay-img">
                <img src={`../Images/${changeWeatherMoodIcon(nextDay5WeatherMood)}.png`} alt="icon" />
              </div>
              <div className="nextDay-temp nextDay-detail">
              <p>{Math.ceil(nextDay5DayTemp)}°</p>
                <p>{Math.ceil(nextDay5NightTemp)}°</p>
              </div>
            </div>
          </div>
          <div className="content">
          <div className="content-container">
          <div className="temp-content flex-content">
                <p><span>Min :&nbsp;</span> {nextDay5MinTemp} °C</p>
                <p><span>Max :&nbsp;</span> {nextDay5MaxTemp} °C</p>
              </div>
              <div className="weatherCondition-content flex-content">
                <p><span>Wind :&nbsp;</span> {nextDay5WindSpeed} km/h</p>
                <p><span>Humidity :&nbsp;</span> {nextDay5Humditiy}%</p>
                <p><span>UV index :&nbsp;</span> {nextDay5UVindex}</p>
              </div>
              <div className="sunrise-content flex-content">
              <p><span>Sunrise :&nbsp;</span> {new Date(nextDay5Sunrise*1000).toLocaleTimeString()}</p>
                <p><span>Sunset :&nbsp;</span> {new Date(nextDay5Sunset*1000).toLocaleTimeString()}</p>
              </div>
              <div className="moonrise-content flex-content">
              <p><span>Moonrise :&nbsp;</span> {new Date(nextDay5Moonrise*1000).toLocaleTimeString()}</p>
                <p><span>Moonset :&nbsp;</span> {new Date(nextDay5Moonset*1000).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Box Ends */}
        <div className="nextDay-box first" style={nextDayBoxStyle6} onClick={viewFullBox6}>
          <div className="nextDay">
            <div className="nextDay-detail">
              <p>{day6Date} {nextMonth(new Date(nextDay6Time*1000).getMonth())}, {upcomingDay(new Date(nextDay6Time*1000).getDay())}</p>
              <p>{nextDay6WeatherMood}</p>
            </div>
            <div className="nextDay-icon">
              <div className="nextDay-img">
                <img src={`../Images/${changeWeatherMoodIcon(nextDay6WeatherMood)}.png`} alt="icon" />
              </div>
              <div className="nextDay-temp nextDay-detail">
              <p>{Math.ceil(nextDay6DayTemp)}°</p>
                <p>{Math.ceil(nextDay6NightTemp)}°</p>
              </div>
            </div>
          </div>
          <div className="content">
          <div className="content-container">
          <div className="temp-content flex-content">
                <p><span>Min :&nbsp;</span> {nextDay6MinTemp} °C</p>
                <p><span>Max :&nbsp;</span> {nextDay6MaxTemp} °C</p>
              </div>
              <div className="weatherCondition-content flex-content">
                <p><span>Wind :&nbsp;</span> {nextDay6WindSpeed} km/h</p>
                <p><span>Humidity :&nbsp;</span> {nextDay6Humditiy}%</p>
                <p><span>UV index :&nbsp;</span> {nextDay6UVindex}</p>
              </div>
              <div className="sunrise-content flex-content">
              <p><span>Sunrise :&nbsp;</span> {new Date(nextDay6Sunrise*1000).toLocaleTimeString()}</p>
                <p><span>Sunset :&nbsp;</span> {new Date(nextDay6Sunset*1000).toLocaleTimeString()}</p>
              </div>
              <div className="moonrise-content flex-content">
              <p><span>Moonrise :&nbsp;</span> {new Date(nextDay6Moonrise*1000).toLocaleTimeString()}</p>
                <p><span>Moonset :&nbsp;</span> {new Date(nextDay6Moonset*1000).toLocaleTimeString()}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Box Ends */}
       
        
      </div>
    </div>
  );
};
