import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./common/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Properties from "./components/Properties";
import InquiryForm from "./components/InquiryForm";
import Neighborhoods from "./components/Neighborhoods";
import SellingSection from "./components/SellingSections";
import Team from "./components/Team";
import Footer from "./common/Footer";

const Dashboard = () => {

  return (
    <>
      <Header/>
      <Hero/>
      <Brands/>
      <Properties/>
      <InquiryForm/>
      <Neighborhoods/>
      <SellingSection/>
      <Team/>
      <Footer/>
    </>
  )
}

export default Dashboard;