import React from 'react'
import './App.css';
import Brands from './components/brands/Brands';
import Contact from './components/contact/Contact';
import Feedbacks from './components/feedbacks/Feedbacks';
import Footer from './components/footer/Footer';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar'
import Services from './components/Services/Services';
import Works from './components/works/Works';

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <Brands />
      <Services />
      <Works />
      <Feedbacks />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
