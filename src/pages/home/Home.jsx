import Featured from "../../components/featured/Featured";
import FeaturedPackages from "../../components/featuredPackages/FeaturedPackages";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PackageList from "../../components/packageList/PackageList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by travle style</h1>
        <PackageList/>
        <h1 className="homeTitle">Popular Packages</h1>
        <FeaturedPackages/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
