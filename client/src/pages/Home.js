// src/pages/HomePage.js
import React from 'react';
import Banner from '../sections/Banner';
import Hero from '../sections/Hero';
import Tokenomics from '../sections/Tokenomics';
import Partners from '../sections/Partners';
import Team from '../sections/Team';
import Roadmap from '../sections/Roadmap';
import Exchanges from '../sections/Exchanges';
import FAQ from '../sections/FAQ';

const HomePage = () => {
  return (
    <>
    <Banner/>
    <Hero/>
    <Tokenomics/>
    <Partners/>
    <Team/>
    <Roadmap/>
    <FAQ/>
    <Exchanges/>
    
    
    </>
    
  );
};

export default HomePage;

const styles = {
  container: {
    textAlign: 'center', // Center-align text
    marginTop: '50px', // Space from the top
  },
  heading: {
    color: '#4CAF50', // Green color for the heading
    fontSize: '2.5rem', // Larger font size for the title
    fontWeight: 'bold', // Make the heading bold
  },
  paragraph: {
    fontSize: '1.2rem', // Slightly larger font for the paragraph
    color: '#555', // Dark gray color for text
    marginTop: '20px', // Space between heading and paragraph
  },
};
