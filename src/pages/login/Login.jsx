import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";





import { login } from "../../context/apiCalls";
import { AuthContext } from "../../context/Context";
import "./Login.scss";
import Logo from "../../assets/logo/logo.jpg";

export default function Login() {

  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);

    navigate("/home")
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={Logo}
            alt="logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <br />
          <span>
            New to Netflix? <Link to="register" className="link"><b>Sign up now.</b></Link>
          </span>
          <br />
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
