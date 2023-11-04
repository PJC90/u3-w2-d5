import { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { Bell, Search } from "react-bootstrap-icons"

const HomeMeteo = () => {

    const [search, setSearch] = useState("")
    const [location, setLocation] = useState(null)
    const [forecast, setForecast] = useState(null)

    const handleSearchClick = () => getLocation()

    const weatherApi = "http://api.openweathermap.org/geo/1.0/direct?q="
    const forecastApi ="https://api.openweathermap.org/data/2.5/forecast?" 
    const keyPC ="97d74e4cb94f1c1f9090b63d3a82801c"
    const keyPC2 ="ef6fe5a03e8caf4874bbd80ad9305b01"
    

    const getLocation = () => {
        fetch(weatherApi + search + "&appid=" + keyPC)
            .then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    throw new Error("Errore recupero località")
                }
            })
            .then(locationSearch =>{
                console.log("Località cercata:", locationSearch)
                setLocation(locationSearch)
                //estrai lat e lon dalla località ricevuta
                if(locationSearch && locationSearch.length > 0){
                    const {lat , lon} = locationSearch[0]
                    console.log(lat, lon)
                    getForecast(lat, lon)
                }
            })
            .catch(err=> console.log("err", err))
    }

    const getForecast = (lat, lon) => {
        // fetch(forecastApi +"lat="+ lat +"&lon="+ lon +"&appid="+ keyPC)
        fetch(`${forecastApi}lat=${lat}&lon=${lon}&appid=${keyPC}&units=metric`)
        
        .then(res=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error("Errore recupero previsioni")
            }
        }) 
        .then((previsioni)=>{
            console.log("previsioni", previsioni)
            setForecast(previsioni)
        })
        .catch(err=> console.log("err", err))

    }
    return(
        <>
        <Row className="justify-content-center mt-5">
              <Col xs={12} md={3} className="text-center">
                <Form.Group>
                  <Form.Control
                    type="search"
                    placeholder="Cerca una località"
                    value={search}
                    onChange={(e) =>
                      setSearch( e.target.value )
                    }
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
              <Button variant="primary" onClick={handleSearchClick}><Search/></Button>
              </Col>
            </Row>
            <Row>
                <Col className="text-light">
                    {forecast && 
                    <>
                    <div>{forecast.list[0].main.temp_max}°C</div>
                    <div>{forecast.list[0].main.temp_min}°C</div>
                    </>}
                </Col>
            </Row>
            </>
    )
}
export default HomeMeteo


