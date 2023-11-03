import { Container,  Nav, Navbar } from "react-bootstrap"
import { Bell, PersonCircle,  } from "react-bootstrap-icons"


const NavbarMeteo = ()=>{

  

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" >
        <Container fluid>
          <Navbar.Brand href="#home">
          <Bell/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
            <Nav.Link>
              Home
            </Nav.Link>
              <Nav.Link>TV Shows</Nav.Link>
              <Nav.Link>Movies</Nav.Link>
              
              <Nav.Link>My List</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="ms-auto d-flex flex-row me-3">
  
            <Nav.Link >
              <PersonCircle/>
            </Nav.Link> 
              
          </Nav>
        </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarMeteo