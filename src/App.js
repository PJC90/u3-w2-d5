import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarMeteo from './Components/NavbarMeteo'

import FooterMeteo from './Components/FooterMeteo'
import HomeMeteo from './Components/HomeMeteo'

function App() {
  return (
    <div className="d-flex h-100 flex-column">
      <NavbarMeteo />
      <div className="flex-grow-1">
        <HomeMeteo />
      </div>
      <FooterMeteo />
    </div>
  )
}

export default App
