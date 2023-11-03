import { Col, Container, Row } from "react-bootstrap"
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons"

const FooterMeteo = () => {
return(
    <>
    <footer >
      <Container>
          <div className="row text-center text-sm-start justify-content-center mt-5">
            <div className="col col-6">
              <Row>
                <Col className="mb-2">
                    <Facebook className="text-secondary me-3"/>
                    <Instagram className="text-secondary me-3"/>
                    <Twitter className="text-secondary me-3"/>
                    <Youtube className="text-secondary"/>
                </Col>
              </Row>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4"
              >
                <div className="col">
                  <div className="row">
                    <div className="col footer-links text-secondary">
                      <p>
                        Lavora con Noi
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links text-secondary">
                      <p>
                        Note Legali
                      </p>
                    
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links text-secondary">
                      <p>
                        Privacy
                      </p>
                     
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col footer-links text-secondary">
                      <p>
                        Dati personali
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col mb-2 mt-2 copyright text-secondary">
                  © 2023 PierMeteo
                </div>
              </div>
            </div>
          </div>
          </Container>
        </footer>
    </>
)
}

export default FooterMeteo