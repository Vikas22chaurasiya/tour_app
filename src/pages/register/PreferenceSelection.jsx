import React, { useState } from "react";
import './register.css'
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "./register.css";

const PreferenceSelection = ({ onSubmit, regdata }) => {
  const [preferences, setPreferences] = useState({
    destination: "",
    travelStyle: "",
    price: "",
    duration: ""
  });

  const { loading, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const credentials = { ...regdata, "preferences": preferences }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${process.env.REACT_APP_LINK}/auth/register`, credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      onSubmit(preferences);
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <select
          name="destination"
          value={preferences.destination}
          onChange={handleChange}
          autoFocus={true}
          className="select"
        >
          <option value="Agra">Agra</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Udaipur">Udaipur</option>
          <option value="Jodhpur">Jodhpur</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Kochi">Kochi</option>
          <option value="Kashmir">Kashmir</option>
          <option value="Leh & Ladakh">Leh & Ladakh</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Fatehpur Sikri">Fatehpur Sikri</option>
          <option value="National Park">National Park</option>
        </select>
        <select
          name="travelStyle"
          value={preferences.travelStyle}
          onChange={handleChange}
          className="select"
        >
          <option value="" disabled hidden style={{ color: 'lightgray' }}>Travel Style</option>
          <option value="In-depth Cultural">In-depth Cultural</option>
          <option value="Explorer">Explorer</option>
          <option value="Safari">Safari</option>
          <option value="Hiking & Trekking">Hiking & Trekking</option>
          <option value="Active Adventure">Active Adventure</option>
        </select>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={preferences.price}
          onChange={handleChange}
          className="rInput"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        />
        <input
          type="text"
          name="duration"
          placeholder="Duration"
          value={preferences.duration}
          onChange={handleChange}
          className="rInput"
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        />
        <button disabled={loading} type="submit" onClick={handleSubmit} className="rButton">Save Preferences</button>
      </div>
    </div>
  );
};

export default PreferenceSelection;
