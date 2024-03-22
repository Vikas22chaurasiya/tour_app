import useFetch from "../../hooks/useFetch";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "./featuredPackages.css";

const FeaturedPackages = () => {
  const { data, loading} = useFetch(`${process.env.REACT_APP_LINK}/packages?limit=4`);

  return (
    <div className="fp">
      {loading ? (
        <>
                <Skeleton
                  count={10}
                  style={{width:"200px"}}
                />
                <br></br>
                <Skeleton
                  count={10}
                  style={{width:"200px"}}
                />
                <br></br>
                <Skeleton
                  count={10}
                  style={{width:"200px"}}
                />
                 <br></br>
                <Skeleton
                  count={10}
                  style={{width:"200px"}}
                />
              </>
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
            <Link
            to={{
              pathname: `/packages/${item._id}`,
              search: `count=1`,
            }}
          >
          <img
                src={item.img_link}
                alt=""
                className="fpImg"
              />
            
          </Link>
              
              <span className="fpName">{item.Package_name}</span>
              <span className="fpCity">{item.Main_style}</span>
              <span className="fpPrice">Starting from ₹{item.Price}</span>
              {item.rating && <div className="fpRating">
                <button>{item.Review_star}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedPackages;
