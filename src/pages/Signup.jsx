import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setIsLoggedIn, setUsername }) {

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleSignup = () => {

    setUsername(name)
setIsLoggedIn(true)

localStorage.setItem("username", name)
localStorage.setItem("isLoggedIn", "true")

navigate("/")
  };

  return (
    <div>
      <h1>Sign Up Page</h1>

      <form>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <br /><br />

        <input
          type="password"
          placeholder="Create Password"
        />

        <br /><br />

        <button
          type="button"
          onClick={handleSignup}
        >
          Sign Up
        </button>

      </form>
    </div>
  );
}

export default Signup;