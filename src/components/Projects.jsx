import React from "react";


import Footer from './Footer';


const ProjectCard = ({ title, description, links, technologies }) => {
    return (
      <div className="max-w-sm group relative bg-gray-900 rounded-lg overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:z-10 shadow-2xl shadow-black/50 hover:shadow-violet-500/20">
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-10" />
        
        {/* Hover shine effect */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
        </div>
  
        <div className="p-6 space-y-4">
          <h5 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
            {title}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
          </h5>
  
          <p className="text-gray-300 leading-relaxed transition-all duration-300 group-hover:text-gray-100">
            {description}
          </p>
  
          <div className="flex flex-wrap gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
            {technologies.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs font-mono bg-white/5 rounded-full text-purple-300 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-purple-100"
              >
                {tag}
              </span>
            ))}
          </div>
  
          <div className="flex gap-3 mt-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all border border-white/10 hover:border-white/20"
              >
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  {link.type}
                </span>
                <svg className="w-4 h-4 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
const Projects = () => {
    return (
        <div className="bg-black min-h-screen pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.map((item, index) => (
                        <ProjectCard
                            key={index}
                            // image={item.image}
                            title={item.title}
                            description={item.description}
                            links={item.links}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};



export const project = [
  {
    title: 'TTP Funding Platform',
    description: 'Angular-based portal for Thailand’s TTP Funding, featuring JWT-secured dashboards (admin/user roles), dynamic forms, and financial workflows. Integrates Spring Boot/MySQL backend for scalable data management. Includes CoreUI charts, email services, and responsive design.Designed for secure financial operations with role-based dashboards, dynamic forms, and data visualization.',

    links: [
      {
          type: 'frontend',
          url: 'https://github.com/ttp-capstone/angular-fe.git'
      },
      {
          type: 'backend',
          url: 'https://github.com/ttp-capstone/spring-BE.git'
      }
  ],
    technologies: [
      
      'Angular', 'CoreUI', 'Bootstrap', 'RxJS', // Frontend
      'SpringBoot', 'Spring Security', 'JWT', 'REST APIs', // Backend
      'MySQL', 'Maven' // Database & Tools
    ]
},
{
  title: 'Restaurant Management ',
  description: 'This project is a Restaurant Management System built with Node.js, Express, and MongoDB, featuring secure user authentication and a RESTful API. It allows users to manage restaurant data while ensuring protected access through JWT tokens.',

  links: [
      {
          type: 'demo',
          url: 'https://github.com/parthpatelz/5315-project.git'
      }
  ],
  technologies: ['Express.js', 'Mongoose ODM', 'MongoDB', 'JWT', 'bcrypt password hashing', 'Handlebars']
},
{
  title: 'Eminent Exposure',
  description: 'Professional photography portfolio showcasing artistic work through an immersive experience. Responsive design with smooth animations and gallery features.',
  // image: vpn,
  links: [
      {
          type: 'demo',
          url: 'https://eminent-exposure.vercel.app/'
      }
  ],
  technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'React Icons']
},
    {
        title: 'Co People',
        description: 'A modern social platform enabling seamless user connections and content sharing. Full-stack application with real-time features and secure authentication.',
        // image: copeople,
        links: [
            {
                type: 'frontend',
                url: 'https://github.com/nithingooud/CoPeople-Frontend'
            },
            {
                type: 'backend',
                url: 'https://github.com/nithingooud/CoPeople-Backend'
            }
        ],
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO']
    },
    
    
    
];

export default Projects;