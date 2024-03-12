import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import "./featured.css";

const Featured = () => {
  const { data, loading} = useFetch(
    `${process.env.REACT_APP_LINK}/packages/countByCity?cities=mumbai,delhi,agra`
  );

  const navigate = useNavigate();
  const HandleClick =  async(e) =>{

    const destination = e.target.id
    const options ={
      adult: 1,
      children: 0,
    }
    navigate("/allpackages", { state: { destination, options } });


  }

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1601961405399-801fb1f34581?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="featuredImg"
              id="Mumbai"
              onClick={HandleClick}
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[0]} Packages</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1576519465852-4d119fcccf33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbGhpfGVufDB8MHwwfHx8MA%3D%3D"
              alt=""
              className="featuredImg"
              id="New Delhi"
              onClick={HandleClick}
            />
            <div className="featuredTitles">
              <h1>New Delhi</h1>
              <h2>{data[1]} Packages</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1545562083-c583d014b4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFncmF8ZW58MHwwfDB8fHww"
              alt=""
              className="featuredImg"
              id="Agra"
              onClick={HandleClick}
            />
            <div className="featuredTitles">
              <h1>Agra</h1>
              <h2>{data[2]} Packages</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
