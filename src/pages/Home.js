import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <About />
    </div>
  );
};

export default Home;