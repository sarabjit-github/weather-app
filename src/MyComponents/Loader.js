import React,{useState, useEffect} from "react";

export const Loader = () => {

  const [appColor, setAppColor] = useState(
    "linear-gradient(to right,rgba(158, 138, 255, 1),rgba(205, 130, 255, 1))"
  );
let changeBackground= ()=>{
  if(window.location.pathname === "/"){
    setAppColor("linear-gradient(to right,rgba(158, 138, 255, 1),rgba(205, 130, 255, 1))");
  }
  if(window.location.pathname === "/WeatherTomorrow"){
    setAppColor("linear-gradient(to right, rgb(126 213 255), rgb(72 149 255))");
  }
  if(window.location.pathname === "/Weather7Days"){
    setAppColor("linear-gradient(to right, rgb(210 113 148), rgb(242 195 224))");
  }
}
  
  const appStyle = {
    background: `${appColor}`,
  };

  useEffect(() => {
   changeBackground();
  }, [])
  

  return (
    <>
      {/* <div className="weather-today"> */}
        <div className="loader-container" style={appStyle}>
          <div className="loader">
            <p>We fetching your location.</p>
            <div className="box">
              <div className="box-inner"></div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};
