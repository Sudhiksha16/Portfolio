import React, { useState } from 'react';
import { Home, User, Briefcase, Mail, Menu, X, Github, Linkedin, Award, ChevronDown, ChevronUp, Phone, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const projects = [
    {
      id: 1,
      title: 'GuardianWallet – Digital Wallet Application',
      subtitle: 'Featured Project',
      description: 'GuardianWallet is a digital wallet application developed during a hackathon, focusing on secure access and practical wallet features. It includes PIN-based authentication and a Trial Mode that allows users to simulate transactions without affecting the main wallet balance. The project was built in a time-constrained, collaborative environment, with emphasis on application logic, UI flow, and usability.',
      tech: ['React Native', 'JavaScript', 'Git', 'GitHub'],
      link: 'https://www.youtube.com/shorts/StUxyOqz1Jk',
      featured: true
    },
    {
      id: 2,
      title: 'Smart Expense Tracker with Analytics',
      subtitle: 'Web Application',
      description: 'Built a comprehensive expense tracking web application that enables users to monitor their financial activities in real-time. The app features intelligent income and expense calculations with instant updates, providing users with clear insights into their spending habits. Implemented category-wise tracking to help users understand where their money goes, with data persistence using localStorage to ensure information is retained across sessions. The project demonstrates proficiency in DOM manipulation, event handling, and practical application of JavaScript fundamentals in solving real-world financial management challenges.',
      tech: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      featured: false
    },
    {
      id: 3,
      title: 'Task Management (To-Do) Web App',
      subtitle: 'Productivity Tool',
      description: 'Developed a feature-rich task management application that streamlines daily productivity and organization. The app provides dynamic functionality for adding, deleting, and marking tasks as complete, offering users an intuitive interface for managing their workload. Leveraged advanced DOM manipulation techniques to ensure smooth UI updates and responsive user interactions. Implemented localStorage for persistent data storage, allowing users to maintain their task lists across browser sessions. This project showcases strong understanding of JavaScript ES6+ features, event-driven programming, and creating practical solutions for everyday productivity needs.',
      tech: ['JavaScript (ES6+)', 'HTML', 'CSS', 'localStorage'],
      featured: false
    },
    {
      id: 4,
      title: 'Weather Forecast Web App',
      subtitle: 'API Integration Project',
      description: 'Created an interactive weather forecast application that delivers real-time weather information by integrating with a public REST API. The app demonstrates proficiency in working with external data sources and handling asynchronous operations in JavaScript. Implemented fetch API for retrieving weather data, along with comprehensive error handling to manage network issues and invalid requests gracefully. The project features a clean, user-friendly interface that displays current weather conditions, forecasts, and relevant meteorological data. This application highlights skills in API integration, asynchronous programming, promise handling, and creating responsive web experiences that depend on external data sources.',
      tech: ['JavaScript (ES6+)', 'HTML', 'CSS', 'REST API', 'Fetch API'],
      featured: false
    }
  ];

  const skills = {
    'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'Responsive Web Design'],
    'Frameworks & Libraries': ['React', 'React Native'],
    'Tools & Development Environment': ['Git', 'Github', 'VS Code', 'Expo'],
    'Programming & Problem Solving': ['Problem Solving', 'Debugging', 'Logical Thinking']
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="text-center px-4">
              <div className="mb-8 inline-block">
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-5xl font-bold">
                  SD
                </div>
              </div>
              <h1 className="text-6xl font-bold text-gray-900 mb-4">Sudhiksha D K</h1>
              <p className="text-2xl text-gray-600 mb-8">Web Developer</p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                Crafting responsive web applications with clean code and modern design principles
              </p>
              <button
                onClick={() => setCurrentPage('projects')}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">About Me</h2>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  I'm a passionate web developer currently pursuing Bachelor of Technology in Artificial Intelligence and Machine Learning at Bannari Amman Institute of Technology. With hands-on experience in building responsive web applications, I focus on creating intuitive user interfaces and functional solutions.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  My journey in web development has been driven by curiosity and a commitment to continuous learning. I enjoy solving problems through clean code and bringing ideas to life through technology.
                </p>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">Skills</h3>
              <div className="space-y-4 mb-8">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="bg-white rounded-xl shadow-md p-6">
                    <h4 className="font-bold text-gray-900 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span key={skill} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900">Bachelor of Technology - Artificial Intelligence and Machine Learning</h4>
                  <p className="text-indigo-600 mb-2">Bannari Amman Institute of Technology, Sathyamangalam | 2023 - 2027</p>
                  <p className="text-gray-700">CGPA: 7.91</p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900">Higher Secondary Certificate - Computer Science Stream</h4>
                  <p className="text-indigo-600 mb-2">SVGV Matriculation Higher Secondary School, Karamadai | 2022 - 2023</p>
                  <p className="text-gray-700">Percentage: 92.5%</p>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">Internship Experience</h3>
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900">Web Developer Intern</h4>
                  <p className="text-indigo-600 mb-3">ElCodamics, Coimbatore (Onsite) | Sep 2025 - Oct 2025</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Developed responsive user interfaces using HTML, CSS, and JavaScript for cross-device compatibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Debugged and resolved UI issues in collaboration with the team to improve layout stability and user experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Assisted in implementing and testing basic front-end and back-end features</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">Achievements</h3>
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-start space-x-4">
                  <Award className="text-indigo-600 mt-1" size={28} />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Hackathon Finalist – BlockDAG Hackathon</h4>
                    <p className="text-gray-700">
                      Selected as a finalist for developing GuardianWallet, a digital wallet prototype with secure PIN-based access and a trial mode for simulating transactions. Contributed to application logic, UI design, and team collaboration in a time-constrained environment. (Prototype tested locally on devices)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">My Projects</h2>
              <p className="text-xl text-gray-600 mb-12">Click on any project to view details</p>
              
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="w-full p-6 text-left flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                          {project.featured && (
                            <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
                          )}
                        </div>
                        <p className="text-indigo-600 font-medium">{project.subtitle}</p>
                      </div>
                      {expandedProject === project.id ? (
                        <ChevronUp className="text-indigo-600" size={28} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={28} />
                      )}
                    </button>
                    
                    {expandedProject === project.id && (
                      <div className="px-6 pb-6 border-t pt-6">
                        <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span key={tech} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                          >
                            View Demo Video
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-12">Let's connect and collaborate</p>
              
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <a href="mailto:sudhikshadk@gmail.com" className="text-indigo-600 hover:underline break-all">
                          sudhikshadk@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                        <a href="tel:+919442212945" className="text-indigo-600 hover:underline">
                          +91 94422 12945
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                        <p className="text-gray-600">Mettupalayam, Coimbatore, Tamil Nadu</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Me</h3>
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="space-y-4">
                    <a 
                      href="https://github.com/Sudhiksha16" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group border border-gray-100"
                    >
                      <Github className="text-gray-700 group-hover:text-indigo-600 flex-shrink-0" size={28} />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900">GitHub</h4>
                        <p className="text-sm text-gray-600 truncate">@Sudhiksha16</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/sudhikshadk/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group border border-gray-100"
                    >
                      <Linkedin className="text-gray-700 group-hover:text-indigo-600 flex-shrink-0" size={28} />
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                        <p className="text-sm text-gray-600 truncate">@sudhikshadk</p>
                      </div>
                    </a>
                    
                    <a 
                      href="https://leetcode.com/u/Sudhiksha16/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group border border-gray-100"
                    >
                      <svg className="text-gray-700 group-hover:text-indigo-600 flex-shrink-0" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                      </svg>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-gray-900">LeetCode</h4>
                        <p className="text-sm text-gray-600 truncate">@Sudhiksha16</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-indigo-600">Sudhiksha D K</div>
            
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-600 hover:text-indigo-600"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden py-4 border-t">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      <div className="pt-16">
        {renderPage()}
      </div>
    </div>
  );
}
