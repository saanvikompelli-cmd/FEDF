import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form>
        <input
          type="email"
          placeholder="Enter Email"
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <br /><br />

        <button
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;