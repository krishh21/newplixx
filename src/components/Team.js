import React from 'react';
import { Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Team = () => {
  const { darkMode } = useTheme();

  // Updated to show only your profile
  const teamMembers = [
    {
      name: "Krishna Yadav",
      role: "Software Engineer Trainee",
      image: "https://res.cloudinary.com/dfthu1xpx/image/upload/v1753434323/kriss_nvyi5e.png",
      linkedin: "https://www.linkedin.com/in/krishna-yadav-27aa8026a",
      bio: "Works on frontend development while learning backend technologies. Focused on gaining practical experience.",
      skills: ["React.js", "Firebase", "Node.js"],
      experience: "6+ months",
      badge: "Trainee",
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
            <span className="font-semibold">Developer</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-500 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Meet the <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Developer</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-colors duration-500 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            The mind behind NewPlix's innovation and success
          </p>
        </div>

        {/* Adjusted grid to justify-center so your card stays in the middle */}
        <div className="flex justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className={`group relative max-w-sm w-full rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } shadow-lg hover:shadow-xl`}>
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-2">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-lg text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <button className="bg-white/20 backdrop-blur-lg text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-lg text-white p-2 rounded-lg hover:bg-white/30 transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {/* Optional Badge display */}
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                  {member.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-lg font-bold mb-1 transition-colors duration-500 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
                <p className={`text-sm leading-relaxed mb-4 transition-colors duration-500 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{member.bio}</p>
                
                {/* Skills Display */}
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 rounded bg-purple-100 text-purple-600 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
