import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarMeteo from './Components/NavbarMeteo'
import FooterMeteo from './Components/FooterMeteo'
import HomeMeteo from './Components/HomeMeteo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LocalitaSalvate from './Components/LocalitaSalvate'
import { useState } from 'react'

const App = () => {
  const [sav, setSav] = useState([])

  return (
    <BrowserRouter>
      <div className="d-flex h-100 flex-column">
        <NavbarMeteo />
        <div className="flex-grow-1 ciao">
          <Routes>
            <Route element={<HomeMeteo sav={sav} setSav={setSav} />} path="/" />
            <Route element={<LocalitaSalvate sav={sav} />} path="/savedloc" />
          </Routes>
        </div>
        <FooterMeteo />
      </div>
    </BrowserRouter>
  )
}

export default App
