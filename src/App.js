import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import Home from "./pages/home/Home";
import AllList from "./pages/allpackages/List";
import Login from "./pages/login/Login";
import Package from './pages/Package/Package'
import RecList from "./pages/recommendation/List";
import FavList from "./pages/favorites/List"
import { AuthContext } from "./context/AuthContext";
import RegistrationPage from "./pages/register/RegistrationPage";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/editprofile/EditProfile";


function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/packages/:id" element={<Package/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegistrationPage/>}/>
        <Route path="/allpackages" element={<AllList/>}/>
        <Route path="/recommendations" element={user?<RecList/>:<Login/>}/>
        <Route path="/favorites" element={user?<FavList/>:<Login/>}/>
        <Route path="/profile" element={user?<Profile/>:<Login/>}/>
        <Route path="/editprofile" element={user?<EditProfile/>:<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
