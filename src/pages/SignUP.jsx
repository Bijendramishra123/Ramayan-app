import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Password match validation
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Storing user temporarily (Replace with API call)
    const userData = { email };
    localStorage.setItem("user", JSON.stringify(userData));

    console.log("User registered:", userData);
    console.log("Navigating to login...");

    // Navigate to login after signup
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignUp} className="auth-box">
        <h2>Sign Up</h2>
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

        <div className="input-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="auth-btn">Sign Up</button>

        <p>Already have an account? <a href="/login">Login</a></p>

        <div className="social-login">
          <button className="google-btn">Sign Up with Google</button>
          <button className="facebook-btn">Sign Up with Facebook</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
