import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  const socialLinks = [
    {
      icon: Twitter,
      url: 'https://x.com/_krishh_y', // Replace with your X/Twitter URL
      label: 'Twitter'
    },
    {
      icon: Github,
      url: 'https://github.com/krishh21', // Replace with your GitHub URL
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/krishna-yadav-27aa8026a/', // Replace with your LinkedIn URL
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className={`transition-all duration-500 ${
      darkMode 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">NewPlix</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                      : 'bg-white hover:bg-gray-100 text-gray-600 shadow-sm'
                  }`}
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className={`text-sm transition-colors duration-500 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2024 NewPlix. All rights reserved.
          </div>
        </div>

        {/* Simple Links */}
        <div className="mt-6 pt-6 border-t text-center">
          <div className="flex justify-center space-x-6 text-sm">
            <Link 
              to="/privacy" 
              className={`transition-colors duration-300 hover:underline ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className={`transition-colors duration-300 hover:underline ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Terms
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-300 hover:underline ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;