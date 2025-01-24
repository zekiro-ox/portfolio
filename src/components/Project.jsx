import React, { useState, useEffect } from "react";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is a short description of Project 1.",
      screenshots: ["project1-1.jpg", "project1-2.jpg", "project1-3.jpg"], // Multiple images for the slideshow
      link: "https://project1.com",
    },
    {
      title: "Project 2",
      description: "This is a short description of Project 2.",
      screenshots: ["project2-1.jpg", "project2-2.jpg", "project2-3.jpg"], // Multiple images for the slideshow
      link: "https://project2.com",
    },
    {
      title: "Project 3",
      description: "This is a short description of Project 3.",
      screenshots: ["project3-1.jpg", "project3-2.jpg", "project3-3.jpg"], // Multiple images for the slideshow
      link: "https://project3.com",
    },
    // Add more projects as needed
  ];

  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    projects.map(() => 0) // Initialize the active image index for each project
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes((prevIndexes) =>
        prevIndexes.map(
          (index, i) => (index + 1) % projects[i].screenshots.length
        )
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [projects]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-200 py-10 px-5">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-300 rounded-full opacity-30 transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-400 rounded-full opacity-20 transform translate-x-20 translate-y-20"></div>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 relative z-10">
        My Projects
      </h1>

      {/* Projects Grid Section */}
      <section className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-4 rounded-md border-l-4 border-blue-500"
            >
              {/* Slideshow for Project Images */}
              <div className="relative w-full h-48 mb-4">
                <img
                  src={project.screenshots[currentImageIndexes[index]]}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 mt-3 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-blue-500 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-yellow-500 rounded-full opacity-50 animate-bounce"></div>
    </div>
  );
};

export default Projects;
