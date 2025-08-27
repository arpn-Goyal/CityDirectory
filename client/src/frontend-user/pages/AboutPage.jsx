import Footer from "../common/Footer";
import Header from "../common/Header";
import MessageFromCEO from "../components/about/MessageFromCEO";
import Testimonials from "../components/about/Testimonials";
import VisionMission from "../components/about/VisionMission";
import WhoWeAre from "../components/about/WhoWeAre";
import WhyChooseUs from "../components/about/WhyChooseUs";


const AboutPage = () => {
  return (
    <>
        <Header/>
        <WhoWeAre />
        <VisionMission />
        <MessageFromCEO />
        <WhyChooseUs />
        <Testimonials />
        <Footer/>
    </>
  );
};

export default AboutPage;
