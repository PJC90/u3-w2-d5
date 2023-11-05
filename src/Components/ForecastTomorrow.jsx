import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { addDays, isSameDay, parseISO, startOfDay } from 'date-fns';

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
const ForecastTomorrow = (props) => {

    const url = "http://openweathermap.org/img/wn/"
    const todayDate = new Date()
    

    if (!props.forecast || !props.forecast.list) {
        // Se props.forecast o props.forecast.list è undefined o null, evita di eseguire il resto del codice
        return null;
      }

    const tomorrow = addDays(startOfDay(new Date()),1)
    const tomorrowForecast =  props.forecast.list.filter((singleForecast)=>{
        
        const forecastdate = parseISO(singleForecast.dt_txt)
        //isSameDay(forecastdate, tomorrow) verifica se la data ottenuta corrisponde a domani
        return isSameDay(forecastdate, tomorrow)
    })
    
    return(
        
         
                <Carousel responsive={responsive} autoPlay={true } autoPlaySpeed={3000}>
                        {props.forecast &&                      
                        tomorrowForecast.map((singleForecast)=>{
                          const date = new Date(singleForecast.dt_txt)
                          const formattedTime = date.toLocaleTimeString("it-IT",{hour: "2-digit", minute:"2-digit"})
                          const arrotondaTemp = singleForecast.main.temp.toFixed(0)
                            return(
                                <div key={singleForecast.dt} className="text-center">
                                    <div>{formattedTime}</div>
                                    <div>
                                        <img src={`${url}${singleForecast.weather[0].icon}.png`} alt="forecast-image" style={{ height: '100px' }} />
                                    </div>
                                    <div className="fs-1 ciao">{arrotondaTemp}°C</div>
                                    <div>Humidity: {singleForecast.main.humidity} %</div>
                                    <div>Pressure: {singleForecast.main.pressure} hPa</div>
                                    <div>Wind: {singleForecast.wind.speed} m/s</div>      
                                </div> 
                            )
                        })                     
                        }
                  </Carousel>
            
           
    )
}
export default ForecastTomorrow
