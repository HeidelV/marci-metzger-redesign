import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertySearch from './components/PropertySearch';
import AboutMarci from './components/AboutMarci';
import Services from './components/Services';
import FeaturedProperties from './components/FeaturedProperties';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PropertySearch />
        <AboutMarci />
        <Services />
        <FeaturedProperties />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
