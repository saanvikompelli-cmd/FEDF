import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import FlightSearch from './pages/FlightSearch'
import FlightDetails from './pages/FlightDetails'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>

      <nav>
        <h2>Flight Status Tracker</h2>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/flights">Flights</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/flights" element={<FlightSearch />} />
        <Route path="/details" element={<FlightDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        © 2026 FlightStatusTracker. All Rights Reserved
      </footer>

    </BrowserRouter>
  )
}

export default App