import ContactFormFull from "../components/property-details/ContactFormFull";
import FloorPlans from "../components/property-details/FloorPlans";
import LocationMap from "../components/property-details/LocationMap";
import PropertyDescription from "../components/property-details/PropertyDescription";
import PropertyDetailsTable from "../components/property-details/PropertyDetailsTable";
import PropertyHero from "../components/property-details/PropertyHero";
import SimilarProperties from "../components/property-details/SimilarProperties";
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';

function PropertyDetails() {
  return (
    <>
      <Header/>
      <PropertyHero />
      <PropertyDescription />
      <PropertyDetailsTable />
      <FloorPlans />
      <LocationMap />
      <SimilarProperties />
      <ContactFormFull />
      <Footer />
    </>
  );
}

export default PropertyDetails;