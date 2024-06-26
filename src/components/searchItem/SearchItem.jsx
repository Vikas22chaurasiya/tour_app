import { Link, useLocation } from "react-router-dom";
import "./searchItem.css";
import StarRatingComponent from "../StarRating/StarRatingComponent";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const SearchItem = ({ item, change, list, count }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  var trick = false;
  if (list.includes(Number(item.PackageNo))) {
    trick = true;
  }

  const [Fav, setfav] = useState(trick);
  const [price, setPrice] = useState("");

  const handleclick = async () => {
    setfav((prev) => !prev);
    try {
      if (!Fav) {
        await axios.post(
          `${process.env.REACT_APP_LINK}/favorites/${user.username}/add/${item.PackageNo}`
        );
        console.log(
          `${process.env.REACT_APP_LINK}/favorites/${user.username}/add/${item.PackageNo}`
        );
      } else {
        await axios.delete(
          `${process.env.REACT_APP_LINK}/favorites/${user.username}/delete/${item.PackageNo}`
        );
        change((prev) => prev + 1);
        //window.location.reload(false);
      }
    } catch (err) {}
  };

  // const handlepackage = async () => {
  //   navigate(`/packages/${item._id}`, { state: { count } });
  // const url = `/packages/${item._id}`;
  // const newTab = window.open(url, "_blank");
  // newTab.focus();
  // }

  return (
    <div className="searchItem">
      <img src={item.img_link} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.Package_name}</h1>

        <span className="siFeatures destination">
          Destination: <span className="nobold">{item.Destination}</span>
        </span>
        <span className="siFeatures">
          Duration: <span className="nobold">{item.Duration}</span>
        </span>
        <span className="siFeatures">
          Country Region: <span className="nobold">{item.Country_region}</span>
        </span>
        <span className="siFeatures">
          Travel Style: <span className="nobold">{item.Main_style}</span>
        </span>
        <span className="siFeatures">
          Operator: <span className="nobold">{item.Operator}</span>
        </span>

        <span className="siDistance">{item.Reviews}</span>
      </div>

      <div className="siDetails">
        <div className="siDetailTexts">
          <span onClick={handleclick} className="favicon">
            {item.Review && (
              <span>
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={item.Review}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            )}
            {Fav ? (
              <FontAwesomeIcon
                icon={faHeart}
                size="2xl"
                style={{ color: "#f00a0a" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                size="2xl"
                style={{ color: "#b8b8b8" }}
              />
            )}
          </span>
          <div className="priceDetails">
            <span className="siPrice">
              ₹
              {Number(
                item.Price.replace(/,/g, "") * (count > 1 ? count : 1)
              ).toLocaleString()}
            </span>
            <span className="siTaxOp">Includes taxes and fees</span>
          </div>
          <Link
            to={{
              pathname: `/packages/${item._id}`,
              search: `count=${count}`,
            }}
            target="_blank"
          >
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
