import HomeComponent from "../../components/Home/HomeComponent";
import Banner from "../../components/Banner/Banner";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";


const Home = () => {
  return (
    <>
      <Banner />
      <Nav/>
      <HomeComponent />
      <Footer/>

    </>
  );
};

export default Home;
