import { useNavigate } from "react-router-dom"
function Signup({ setIsLoggedIn }) {

  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()

    setIsLoggedIn(true)

    navigate("/")
  }
  return (
    <div>
      <h1>Sign Up Page</h1>

      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Enter Name" />
        <br /><br />

        <input type="email" placeholder="Enter Email" />
        <br /><br />

        <input type="password" placeholder="Create Password" />
        <br /><br />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup