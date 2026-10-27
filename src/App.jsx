import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marci from './components/AboutMarci.jsx';
import Services from './components/Services.jsx';
import PropertySearch from './components/PropertySearch.jsx';
import Affiliations from './components/Affiliations.jsx';
import Gallery from './components/Gallery.jsx';
import OurServices from './components/OurServices.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marci />
      <Services />
      <PropertySearch />
      <Affiliations />
      <Gallery />
      <OurServices />
      <Contact />
    </>
  );
}

export default App;