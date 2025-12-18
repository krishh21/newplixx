import React from 'react';
import About from '../components/About';
import Team from '../components/Team';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 pt-16">
      <About />
      <Team />
    </div>
  );
};

export default AboutPage;