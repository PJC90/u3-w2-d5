import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Forecast = (props) => {

    const url = "http://openweathermap.org/img/wn/"

    
    return(
            
                  <Carousel responsive={responsive}>
                        {props.forecast &&                      
                        props.forecast.list.map((singleForecast)=>{
                            return(
                                <div key={singleForecast.dt} className="text-center">
                                    <div>Data: {singleForecast.dt_txt}</div>
                                    <div>{singleForecast.dt_txt}</div>
                                    <div className="fs-1">{singleForecast.main.temp}°C</div>
                                    <div>Humidity: {singleForecast.main.humidity} %</div>
                                    <div>Pressure: {singleForecast.main.pressure} hPa</div>
                                    <div>Wind: {singleForecast.wind.speed} m/s</div>
                                    <div>
                                        <img src={`${url}${singleForecast.weather[0].icon}.png`} alt="forecast-image" />
                                    </div>
                                        
                                </div> 
                            )
                        })                     
                        }
                  </Carousel>
    )
}
export default Forecast

 // console.log(singleForecast.weather)
                            // console.log(`${url}${singleForecast.weather.icon}.png`)
