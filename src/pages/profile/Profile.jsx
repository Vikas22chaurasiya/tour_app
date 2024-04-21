import "./profile.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useState,useContext } from "react";
import useFetch from "../../hooks/useFetch";
import { userInputs } from "../../formSource";
import { AuthContext } from "../../context/AuthContext";
import { Link} from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  console.log(user.img)
 



  return (
    <div>
    <Navbar />
      <Header type="list" />
    <div className="new">
   
      <div className="newContainer">
     
        <div className="top">
          <h1>Profile</h1>
          <Link to="/editprofile" style={{ color: "inherit", textDecoration: "none" }}>
          <button style={{float:"right",marginRight:"10px"}}>Edit</button>
          </Link>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                user.img
                  ? user.img
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
            
              <div className="formInput">
                  <label>Username:</label>
                  <input
                    id="username"

                    onChange={(e) => setInfo({ ...info, name: e.target.value })}
                    defaultValue={user.username}
                    type="text"
                    placeholder="Username"

                  />
                </div>

                <div className="formInput">
                  <label>Email:</label>
                  <input
                    id="email"
                   
                    defaultValue={user.email}
                    type="email"
                    placeholder="abcd@gamil.com"
                  />
                </div>

                <div className="formInput">
                  <label>Phone:</label>
                  <input
                    id="phone"
                  
                    value={user.phone}
                    type="tel"
                    placeholder="phone no"
                  />
                </div>

                <div className="formInput">
                  <label>City:</label>
                  <input
                    id="city"
                  
                    value={user.city}
                    type="text"
                    placeholder="city"
                  />
                </div>

                <div className="formInput">
                  <label>Country:</label>
                  <input
                    id="country"
                    value={user.country}
                    type="text"
                    placeholder="country"
                  />
                </div>

               

                <div className="formInput">
                  <label>Destination:</label>
                  <select
                    id="destination"
                    value={user.preferences.destination}
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
                    value={user.preferences.travelStyle}
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
                 
                    value={user.preferences.price}
                    type="number"
                    placeholder="price"
                  />
                </div>

                <div className="formInput">
                  <label>Duration:</label>
                  <input
                    id="duration"
               
                    value={user.preferences.duration}
                    type="text"
                    placeholder="Duration"
                  />
                </div>

            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
