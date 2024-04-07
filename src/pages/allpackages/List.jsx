import styles from "./list.module.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import useFetchfav from "../../hooks/useFetchfav";
import { AuthContext } from "../../context/AuthContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AllList = () => {
  const location = useLocation();
  const a = location.state ? location.state.destination || "" : ""
  const b = location.state ? location.state.options.adult || 1 : 1
  const c = location.state ? location.state.options.children || 0 : 0
  const d = location.state ? location.state.style || "" : ""
  const [destination, setDestination] = useState(a);
  const [adultCount, setAdultCount] = useState(b);
  const [childCount, setChildCount] = useState(c);
  const [style, setStyle] = useState(d);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { user } = useContext(AuthContext);

  const { data, reFetch } = useFetch(
    `${process.env.REACT_APP_LINK}/packages?city=${destination}&mainstyle=${style}&min=${min || 0}&max=${max || 9999}&limit=30`
  );

  console.log(`${process.env.REACT_APP_LINK}/packages?city=${destination}&min=${min || 0}&max=${max || 999}&limit=30`)
  const person = user ? user.username : "No-User"


  const { datalist, reFetch1, loading1 } = useFetchfav(
    `${process.env.REACT_APP_LINK}/favorites/${person}/favlist`
  );
  console.log(datalist);

  const handleClick = () => {
    reFetch();
  };

  const [time, settime] = useState(true);

  setTimeout(() => {
    settime(false);
  }, 500);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.listSearch}>
            <h1 className={styles.lsTitle}>Search</h1>

            <div className={styles.lsItem}>
              <label>Destination</label>
              <input
                id="destination"
                onChange={(e) => setDestination(e.target.value)}
                placeholder=""
                value={destination}
                type="text" />

            </div>

            <div className={styles.lsItem}>
              <label>Travel Style</label>
              <select
                onChange={(e) => setStyle(e.target.value)}
                // placeholder={style}
                value={style}
                type="text"
              >
                <option value=""></option>
                <option value="In-depth Cultural">In-depth Cultural</option>
                <option value="Explorer">Explorer</option>
                <option value="Safari">Safari</option>
                <option value="Hiking & Trekking">Hiking & Trekking</option>
                <option value="Active Adventure">Active Adventure</option>
              </select>
            </div>

            {/* <div className={styles.lsItem}>
              <label>Travel Style</label>
              <input
                id="style"
                onChange={(e) => setStyle(e.target.value)}
                placeholder=""
                value={style}
                type="text" />
            </div> */}

            <div className={styles.lsItem}>
              <label>Options</label>
              <div className={styles.lsOptions}>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Min price</span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className={styles.lsOptionInput}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Max price</span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className={styles.lsOptionInput}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className={styles.lsOptionInput}
                    placeholder=""
                    value={adultCount}
                    onChange={(e) => {
                      setAdultCount(e.target.value);
                    }}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Children</span>
                  <input
                    type="number"
                    min={0}
                    className={styles.lsOptionInput}
                    placeholder=""
                    value={childCount}
                    onChange={(e) => {
                      setChildCount(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className={styles.listResult}>
            {loading1 ? (
              <>
                <Skeleton
                  count={10}
                  style={{ marginLeft: "50px", marginRight: "50px" }}
                />
                <br></br>
                <Skeleton
                  count={10}
                  style={{ marginLeft: "50px", marginRight: "50px" }}
                />
                <br></br>
                <Skeleton
                  count={10}
                  style={{ marginLeft: "50px", marginRight: "50px" }}
                />
                <br></br>
                <Skeleton
                  count={10}
                  style={{ marginLeft: "50px", marginRight: "50px" }}
                />
                <br></br>
                <Skeleton
                  count={10}
                  style={{ marginLeft: "50px", marginRight: "50px" }}
                />
              </>
            ) : (
              <>
                {data.map((item) => {
                  const totalCount = parseInt(adultCount, 10) + parseInt(childCount, 10);
                  return (
                    <SearchItem
                      item={item}
                      list={datalist.favorites}
                      key={item._id}
                      count={totalCount}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllList;