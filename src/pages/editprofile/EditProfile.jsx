import "./profile.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useState,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {faFileArrowUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch";
import ReactDOM from 'react-dom';
import { userInputs } from "../../formSource";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";



const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({ username:user.username,email:user.email,phone:user.phone,city:user.city,country:user.country, preferences:{
    destination:user.preferences.destination,
    travelStyle:user.preferences.travelStyle,
    price:user.preferences.price,
    duration:user.preferences.duration
  },img:""});
  const navigate = useNavigate()
  const user_id = user._id
  const { loading, error, dispatch } = useContext(AuthContext);
 


  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(info)
  };

 
  

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dg27abbpd/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      console.log(info)

      const test = {
        username:info.username,email:info.email,phone:info.phone,city:info.city,country:info.country, preferences:{
          destination:info.destination,
          travelStyle:info.travelStyle,
          price:info.price,
          duration:info.duration
        },
        img: list[0],
      };

      

      await axios.put(`${process.env.REACT_APP_LINK}/users/${user_id}`, test);

      const user_new = await axios.get(`${process.env.REACT_APP_LINK}/users/${user_id}`);
      dispatch({ type: "LOGIN_SUCCESS", payload: user_new.data });
      navigate('/')
    } catch (err) {console.log(err)}
  };


  return (
    <div>
    <Navbar />
      <Header type="list" />
    <div className="new">
   
      <div className="newContainer">
     
        <div className="top">
          <h1>Profile</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                user
                  ? user.img
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                
                  {/* Image: <DriveFolderUploadOutlinedIcon className="icon" /> */}
                  Image: <FontAwesomeIcon icon={faFileArrowUp} />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                  <label>Username:</label>
                  <input
                    id="username"
                    value={user.username || ""}
                    type="text"
                    placeholder="Username"

                  />
                </div>

                <div className="formInput">
                  <label>Email:</label>
                  <input
                    id="email"
                    onChange={handleChange}
                    type="email"
                    defaultValue={user.email || ""}
                    placeholder={user.email}
                  />
                </div>

                <div className="formInput">
                  <label>Phone:</label>
                  <input
                    id="phone"
                    onChange={handleChange}
               
                    type="tel"
                    defaultValue={user.phone || ""}
                    placeholder={user.phone}
                  />
                </div>

                <div className="formInput">
                  <label>City:</label>
                  <input
                    id="city"
                    onChange={handleChange}
                    defaultValue={user.city || ""}
                
                    type="text"
                    placeholder={user.city}
                  />
                </div>

                <div className="formInput">
                  <label>Country:</label>
                  <input
                    id="country"
                    onChange={handleChange}
                    type="text"
                    placeholder={user.country}
                    defaultValue={user.country || ""}
                  />
                </div>

               

                <div className="formInput">
                  <label>Destination:</label>
                  <select
                    id="destination"
                    onChange={handleChange}
                    defaultValue={user.preferences ? user.preferences.destination : ""}
                    autoFocus={true}>
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
                </div>

                <div className="formInput">
                  <label>travelStyle:</label>
                  <select
                    id="travelStyle"
                    onChange={handleChange}
                defaultValue={user.preferences.travelStyle || ""}
                    autoFocus={true}
                    type="text"
                  >
                    <option value="In-depth Cultural">In-depth Cultural</option>
                    <option value="Explorer">Explorer</option>
                    <option value="Safari">Safari</option>
                    <option value="Hiking & Trekking">Hiking & Trekking</option>
                    <option value="Active Adventure">Active Adventure</option>

                  </select>
                </div>

                <div className="formInput">
                  <label>Price</label>
                  <input
                    id="price"
                    onChange={handleChange}
                    type="number"
                    defaultValue={user.preferences.price || ""}
                    placeholder={user.preferences.price}
                  />
                </div>

                <div className="formInput">
                  <label>Duration:</label>
                  <input
                    id="duration"
                    onChange={handleChange}
                    type="text"
                    defaultValue={user.preferences.duration || ""}
                    placeholder={user.preferences.duration}
                  />
                </div>



             


          
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EditProfile;
