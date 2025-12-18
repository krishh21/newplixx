import React from 'react';
import { Zap, Shield, Palette, Globe, Clock, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Features = () => {
  const { darkMode } = useTheme();

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate high-quality images in seconds with our optimized AI models"
    },
    {
      icon: Palette,
      title: "Multiple Styles",
      description: "Choose from various art styles, from photorealistic to abstract art"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your creations are stored securely with end-to-end encryption"
    },
    {
      icon: Globe,
      title: "Multi-Platform",
      description: "Access NewPlix from any device with our responsive design"
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Our AI never sleeps - create whenever inspiration strikes"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share and collaborate on projects with your team members"
    }
  ];

  return (
    <section className={`py-20 transition-colors duration-500 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Why <span className={darkMode ? 'text-purple-400' : 'text-purple-600'}>NewPlix</span> Stands Out
          </h2>
          <p className={`text-xl max-w-2xl mx-auto transition-colors duration-500 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Experience the next generation of AI-powered creativity with features designed for modern creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl border ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600' 
                    : 'bg-white border-gray-200'
                }`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 ${
                  darkMode ? 'bg-purple-600' : 'bg-purple-600'
                }`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`leading-relaxed transition-colors duration-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 rounded-full group-hover:w-3/4 transition-all duration-500 ${
                  darkMode ? 'bg-purple-500' : 'bg-purple-600'
                }`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;