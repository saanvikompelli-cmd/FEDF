import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn, setUsername }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter Email and Password");
      return;
    }

    const name = email.split("@")[0];

   setUsername(name)
setIsLoggedIn(true)

localStorage.setItem("username", name)
localStorage.setItem("isLoggedIn", "true")

navigate("/")
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;