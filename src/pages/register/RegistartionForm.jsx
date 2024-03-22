
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";


const RegistrationForm = ({ onSubmit }) => {
  const [credentials, setCredentials] = useState({
     username: '',
    password: '',
    email: '',
    city: '',
    country: '',
    phone: '',
  });

  const { loading, error } = useContext(AuthContext);
  
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      alert('Please fill in the username and password fields');
      return;
    } else if (!credentials.email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    } else if (!credentials.phone.match(/^\d{10}$/)) {
      alert('Please enter a valid 10-digit phone number');
      return;
    } else {
      onSubmit(credentials);
    }

  };

  return (
    <div className="register">
      <div className="rContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          value={credentials.username}
          onChange={handleChange}
          className="rInput"
          required
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          className="rInput"
          required
        />

        <input
          type="email"
          placeholder="email"
          id="email"
          value={credentials.email}
          onChange={handleChange}
          className="rInput"
          required
        />

        <input
          type="city"
          placeholder="city"
          id="city"
          value={credentials.city}
          onChange={handleChange}
          className="rInput"
        />

        <input
          type="text"
          placeholder="country"
          id="country"
          value={credentials.country}
          onChange={handleChange}
          className="rInput"
        />

        <input
          type="tel"
          placeholder="mobile no"
          id="phone"
          value={credentials.phone}
          onChange={handleChange}
          className="rInput"
          onKeyDown={(e) => e.key === "Enter" && handleClick(e)}
        />
        <button disabled={loading} onClick={handleClick} className="rButton">
          Register
        </button>
        <Link to="/login">
          <button className="rButton linkbtn">
            Already registered? Log in
          </button>
        </Link>

        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default RegistrationForm;
