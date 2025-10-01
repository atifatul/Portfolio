import React from 'react';

// Aap yahan apne projects ki details daal sakte ho
const projects = [
  {
    title: 'Word Nest',
    description: 'A modern blogging platform with rich text editing and image upload capabilities. Built for global performance.',
    tags: ['TypeScript', 'HonoJs', 'PostgreSQL', 'Cloudflare', 'ReactJs'],
    image: 'https://via.placeholder.com/400x300', // Yahan project ka screenshot daalna
    link: '#', // Yahan project ka link daalna
  },
  {
    title: 'Project Two',
    description: 'Description for the second project goes here. Explain what it does and the tech used.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'Description for the third project. Keep it concise and impactful.',
    tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
    image: 'https://via.placeholder.com/400x300',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="project" className="bg-[#191919] text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">My Work</h2>
          <p className="text-gray-400 mt-2">Some of the projects I've built</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#111111] rounded-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-700 text-sm px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;