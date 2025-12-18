import React from 'react';
import { Target, Eye, Heart, ArrowRight, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="font-semibold">About NewPlix</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Revolutionizing <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Digital Creativity</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                NewPlix is at the forefront of AI-driven creativity, empowering artists, 
                designers, and creators to bring their wildest imaginations to life. 
                Our platform combines cutting-edge machine learning with intuitive design.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <span className="font-semibold text-gray-900 dark:text-white">Mission-driven Innovation</span>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="font-semibold text-gray-900 dark:text-white">Visionary Technology</span>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <Heart className="w-6 h-6 text-green-600 dark:text-green-400" />
                <span className="font-semibold text-gray-900 dark:text-white">User-First Approach</span>
              </div>
            </div>

            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover-lift shadow-lg">
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Visual Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-80"></div>
              </div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 transform hover:scale-105 transition-transform duration-500 shadow-2xl"></div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-400 to-cyan-500 transform hover:scale-105 transition-transform duration-500 shadow-2xl"></div>
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;