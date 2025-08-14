import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PropertyList from "./components/PropertyList";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // IMPORTANT for modal
import LanguageRegionModal from "./components/LanguageRegionalModal";



function App() {
  return (
    <div>
      <Navbar />
      <LanguageRegionModal />
      <Hero />
      <PropertyList />
      <Footer />
    </div>
  );
}

export default App;
