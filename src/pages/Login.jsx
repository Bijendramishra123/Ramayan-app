import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import icons
import "./../styles/Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary user authentication (replace with API call)
    if (email === "user@example.com" && password === "password123") {
      localStorage.setItem("user", JSON.stringify({ email }));
      setIsAuthenticated(true);
      navigate("/");
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
        <div className="social-login">
          <button className="google-btn">
            <FaGoogle size={20} style={{ marginRight: "8px" }} /> Google
          </button>
          <button className="facebook-btn">
            <FaFacebook size={20} style={{ marginRight: "8px" }} /> Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
