import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Users, Award, Star, Sparkles } from 'lucide-react'; 
import { useTheme } from '../contexts/ThemeContext';

// Import your logo
import NewPlixLogo from '../assets/newplix.png'; 

const Hero = () => {
  const { darkMode } = useTheme();

  const stats = [
    { icon: Users, value: "10K+", label: "Active Creators" },
    { icon: Star, value: "95%", label: "Satisfaction Rate" },
    { icon: Award, value: "4.9★", label: "User Rating" },
    { icon: Zap, value: "24/7", label: "AI Available" }
  ];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-500 pt-16 lg:pt-20 ${
      darkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 mt-8 lg:mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content (Unchanged) */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge (Unchanged) */}
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-500 ${
                darkMode
                  ? 'bg-purple-900 border-purple-700 text-purple-300'
                  : 'bg-purple-100 border-purple-300 text-purple-700'
              }`}>
                <Sparkles className="w-4 h-4" /> 
                <span className="text-sm font-medium">AI-Powered Creativity Platform</span>
              </div>

              {/* Main Heading (Unchanged) */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                  <span className={`block transition-colors duration-500 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Transform Your
                  </span>
                  <span className={`block transition-colors duration-500 ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    Imagination
                  </span>
                  <span className={`block text-xl sm:text-2xl font-semibold mt-2 transition-colors duration-500 ${
                    darkMode ? 'text-purple-300' : 'text-purple-600'
                  }`}>
                    Into Stunning Visual Reality
                  </span>
                </h1>

                <p className={`text-lg lg:text-xl max-w-2xl leading-relaxed transition-colors duration-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  NewPlix harnesses cutting-edge AI to turn your wildest ideas into stunning visual masterpieces. 
                  Create, innovate, and inspire with the most advanced image generation technology.
                </p>
              </div>

              {/* CTA Buttons and Stats (Unchanged) */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/generate"
                  className={`group inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  <span>Start Creating Magic</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <button className={`group inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border transition-all duration-300 ${
                  darkMode
                    ? 'bg-transparent border-purple-600 text-purple-300 hover:bg-purple-800 hover:border-purple-500'
                    : 'bg-white border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-400'
                }`}>
                  <Play className="w-5 h-5 mr-2" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Stats (Unchanged) */}
              <div className="pt-8">
                <div className={`text-sm font-medium mb-4 transition-colors duration-500 ${
                  darkMode ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  Trusted By Thousands
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <Icon className={`w-5 h-5 mx-auto mb-2 transition-colors duration-500 ${
                          darkMode ? 'text-purple-400' : 'text-purple-600'
                        }`} />
                        <div className={`text-lg font-bold transition-colors duration-500 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {stat.value}
                        </div>
                        <div className={`text-xs transition-colors duration-500 ${
                          darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Visual - MODIFIED to remove blue border and change badge colors */}
            <div className="relative">
              <div className={`relative mx-auto max-w-md rounded-2xl overflow-hidden shadow-2xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } p-4 border-4 border-gray-900 dark:border-gray-700`}> {/* 👇 Changed border to black/dark-gray */}
                <div className={`aspect-square flex items-center justify-center p-8 rounded-xl ${
                    darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50' 
                }`}>
                  <img 
                    src={NewPlixLogo} 
                    alt="NewPlix AI Logo" 
                    className="w-48 h-48 object-contain transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                
                {/* AI Powered Badge - MODIFIED to use gray/black background */}
                <div className={`absolute -top-2 -right-2 px-3 py-2 rounded-xl shadow-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-800' // 👇 Changed to dark grey/black
                }`}>
                  <div className="flex items-center space-x-1 text-white text-xs font-semibold">
                    <Zap className="w-3 h-3" />
                    <span>AI Powered</span>
                  </div>
                </div>

                {/* Magic Creation Badge - MODIFIED to use gray/black background */}
                <div className={`absolute -bottom-2 -left-2 px-3 py-2 rounded-xl shadow-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-800' // 👇 Changed to dark grey/black
                }`}>
                  <div className="flex items-center space-x-1 text-white text-xs font-semibold">
                    <Sparkles className="w-3 h-3" /> 
                    <span>Magic Creation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (Unchanged) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center transition-colors duration-500 ${
          darkMode ? 'border-purple-500' : 'border-purple-300'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-bounce transition-colors duration-500 ${
            darkMode ? 'bg-purple-400' : 'bg-purple-600'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;