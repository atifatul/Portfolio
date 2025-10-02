import React from "react";
import Bookstore from "../assets/Bookstore Web.png";
import Agency from "../assets/Agency.ai.png";
import Spotify from "../assets/Spotify.png";

// Aap yahan apne projects ki details daal sakte ho
const projects = [
  {
    title: "Book Store Web Application",
    description:
      "Developed a fully functional Book Store application with features like user authentication, book search, add to cart, and checkout.Designed a responsive UI using Tailwind CSS and React components.",
    tags: ["HTML5", "CSS3", "JavaScript", "ReactJs"],
    image: Bookstore, // Yahan project ka screenshot daalna
    link: "https://book-store-application-kohl.vercel.app/", // Yahan project ka link daalna
  },
  {
    title: "Agency Ai",
    description:
      "Built an AI-powered web application that allows users to generate marketing content and automate workflows. Designed a responsive and modern UI with Tailwind CSS, ensuring smooth user experience.",
    tags: ["React", "Tailwind CSS", "Javascript"],
    image: Agency,
    link: "https://agency-ai-rho-azure.vercel.app/",
  },
  {
    title: "Spotify Frontend Replica",
    description:
      "Developed a responsive clone of Spotify’s user interface using HTML5 and CSS3 Replicated core components such as the sidebar, playlist section, album thumbnails, and playback controls.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: Spotify,
    link: "https://spotify-ui.vercel.app/",
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
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-sm px-2 py-1 rounded"
                    >
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
};

export default Projects;
