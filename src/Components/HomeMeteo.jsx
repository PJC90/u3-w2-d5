import { useEffect, useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { Bell, Search } from "react-bootstrap-icons"

const HomeMeteo = () => {

    const [search, setSearch] = useState("")
    const [location, setLocation] = useState(null)

    const handleSearchClick = () => getLocation()

    const weatherApi = "http://api.openweathermap.org/geo/1.0/direct?q="
    const key ="97d74e4cb94f1c1f9090b63d3a82801c"


    const getLocation = () => {
        fetch(weatherApi + search + "&appid=" + key)
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
            })
            .catch(err=> console.log("err", err))
    }
    return(
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
    )
}
export default HomeMeteo


