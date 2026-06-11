import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import FlightSearch from './pages/FlightSearch'
import FlightDetails from './pages/FlightDetails'
import Contact from './pages/Contact'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("isLoggedIn") === "true"
)

const [username, setUsername] = useState(
  localStorage.getItem("username") || ""
)

  return (
    <BrowserRouter>

      <nav>
        <h2>Flight Status Tracker</h2>

<ul>
 <li><Link to="/">Home</Link></li>

{!isLoggedIn ? (
  <>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">Sign Up</Link></li>
  </>
) : null}

<li><Link to="/flights">Flights</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ul>
{isLoggedIn && (
  <div className="profile">
    👤 {username}

    <button
      className="logout-btn"
     onClick={() => {

  setIsLoggedIn(false)
  setUsername("")

  localStorage.removeItem("username")
  localStorage.removeItem("isLoggedIn")

}}
    >
      Logout
    </button>
  </div>
)}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
  path="/login"
  element={
    <Login
      setIsLoggedIn={setIsLoggedIn}
      setUsername={setUsername}
    />
  }
/>
<Route
  path="/signup"
  element={
    <Signup
      setIsLoggedIn={setIsLoggedIn}
      setUsername={setUsername}
    />
  }
/>
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