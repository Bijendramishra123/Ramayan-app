import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import "../styles/SignUp.css";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // ✅ Password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5297/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          passwordHash: password, // 👈 backend field
        }),
      });

      // Response body पढ़ने से पहले check करो content है या नहीं
      const text = await response.text();
      const result = text ? JSON.parse(text) : {};

      if (response.ok) {
        console.log("✅ Registered:", result);
        navigate("/login"); // 👉 Redirect to login after successful signup
      } else {
        setError(result.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Registration Error:", err);
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignUp} className="auth-box">
        <h2>Sign Up</h2>

        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

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

        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <div className="social-login">
          <button className="google-btn" type="button">
            <FaGoogle className="icon" /> Google
          </button>
          <button className="facebook-btn" type="button">
            <FaFacebook className="icon" /> Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
