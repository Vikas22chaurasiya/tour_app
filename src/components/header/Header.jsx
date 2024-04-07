import {
  faBed,
  faPerson,
  faHeart,
  faHome,
  faList,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useContext, useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate, useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Header = ({ type }) => {
  const location = useLocation();

  const [destination, setDestination] = useState("");
  const [home, sethome] = useState(false);
  const [packages, setpackages] = useState(false);
  const [rec, setrec] = useState(false);
  const [fav, setfav] = useState(false);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  });

  useEffect(() => {
    if (location.pathname === "/") {
      sethome(true);
      setpackages(false);
      setrec(false);
      setfav(false);
    } else if (location.pathname === "/allpackages") {
      setpackages(true);
      sethome(false);
      setrec(false);
      setfav(false);
    } else if (location.pathname === "/recommendations") {
      setrec(true);
      sethome(false);
      setpackages(false);
      setfav(false);
    } else if (location.pathname === "/favorites") {
      setfav(true);
      sethome(false);
      setpackages(false);
      setrec(false);
    }
  }, [location.pathname]);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, options } });
    navigate("/allpackages", { state: { destination, options } });
  };


  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className={home ? "headerListItem active" : "headerListItem"}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <FontAwesomeIcon icon={faHome} />
              <span> Home</span>
            </Link>
          </div>

          <div
            className={packages ? "headerListItem active" : "headerListItem"}
          >
            <Link
              to="/allpackages"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faList} />
              <span> All Packages</span>
            </Link>
          </div>

          <div className={rec ? "headerListItem active" : "headerListItem"}>
            <Link
              to="/recommendations"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faWandMagicSparkles} />
              <span> Try Recommendations</span>
            </Link>
          </div>

          <div className={fav ? "headerListItem active" : "headerListItem"}>
            <Link
              to="/favorites"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faHeart} />
              <span> Favorites</span>
            </Link>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Discover Your Next Adventure: Tailored Tours Just for You!
            </h1>
            <p className="headerDesc">
              Explore destinations, discover hidden gems, and unlock your
              wanderlust and guide you to an unforgettable adventure.
            </p>

            <center>
              {user &&
                <button className="headerBtn">
                  <Link
                    to="/recommendations"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                    <span> Try Recommendations</span>
                  </Link>
                </button>}
            </center>

            {/* {!user && <button className="headerBtn">Sign in / Register</button>} */}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="searchBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
