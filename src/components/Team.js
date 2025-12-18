import React from 'react';
import { Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Team = () => {
  const { darkMode } = useTheme();

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "AI researcher with 10+ years in machine learning and computer vision",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Former Google AI engineer specializing in generative models",
    },
    {
      name: "Elena Petrova",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "UX/UI expert with passion for AI-human interaction design",
    },
    {
      name: "David Kim",
      role: "AI Research Scientist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "PhD in Computer Science focusing on diffusion models",
    }
  ];

  return (
    <section className={`py-20 transition-colors duration-500 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold">Our Team</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Meet Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Dream Team</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            The brilliant minds behind NewPlix's innovation and success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className={`group relative rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg hover:shadow-xl`}>
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2">
                    <button className="bg-white/20 backdrop-blur-lg text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-lg text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-lg text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-lg text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-lg font-bold mb-1 transition-colors duration-500 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                <p className={`text-sm leading-relaxed transition-colors duration-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;