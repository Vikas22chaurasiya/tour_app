import "./navbar.css";
import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user,dispatch  } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    try {
      await axios.post(`${process.env.REACT_APP_LINK}/auth/logout`);
      navigate("/")
    } catch (err) {
      console.log(err)
    }
   
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">TripVenture</span>
        </Link>
        {user ? <div className="navItems">
            <span className="navButtonname">Welcome {user.username} </span>
           
            <button className="navButton" onClick={handleClick}>Logout</button>
  
           
          </div> : (
          <div className="navItems">
          <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton">Register</button>
            </Link>

            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton" >Login</button>
        </Link>
           
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
