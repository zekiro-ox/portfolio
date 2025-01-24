import React from "react";

const About = () => {
  const education = [
    {
      year: "Graduating Batch of 2025",
      degree: "Bachelor of Science in Information System ",
      institution: "City College of Angeles, Arayat Blvd., Angeles, Pampanga",
    },
    {
      year: "2021",
      degree:
        "Technical-Vocational-Livelihood-ICT-Animation/Illustration NC II ",
      institution:
        "Angeles City Senior Highschool, St. Ignatius Subd, Santa Rita St, Angeles, Pampanga",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS/Tailwind",
    "Git",
    "Firebase",
    "Adaptability",
    "Patience",
    "Flexibility",
  ];

  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Solutions Inc.",
      duration: "June 2023 - Present",
      description:
        "Developed responsive web interfaces using React and Tailwind CSS, improving user engagement by 25%.",
    },
    {
      role: "Web Developer",
      company: "Freelance",
      duration: "Jan 2022 - May 2023",
      description:
        "Built and deployed websites for small businesses, focusing on clean design and user-friendly layouts.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#12151c] py-10 px-5">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#661b1c] rounded-full opacity-30 transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#1b222c] rounded-full opacity-20 transform translate-x-20 translate-y-20"></div>

      <h1 className="text-4xl font-bold text-center text-white mb-10 relative z-10">
        About Me
      </h1>

      {/* Education Section */}
      <section className="mb-10 relative z-10">
        <h2 className="text-2xl font-semibold text-[#661b1c] mb-4">
          Education
        </h2>
        <div className="space-y-4">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-[#191d26] shadow-md p-4 rounded-md border-l-4 border-[#661b1c]"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.degree}
              </h3>
              <p className="text-gray-400">{item.institution}</p>
              <p className="text-gray-500 text-sm">{item.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-10 relative z-10">
        <h2 className="text-2xl font-semibold text-[#661b1c] mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-[#1b222c] cursor-pointer text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-[#191d26] transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10">
        <h2 className="text-2xl font-semibold text-[#661b1c] mb-4">
          Experience
        </h2>
        <div className="space-y-4">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-[#191d26] shadow-md p-4 rounded-md border-l-4 border-[#531516]"
            >
              <h3 className="text-lg font-semibold text-white">{item.role}</h3>
              <p className="text-gray-400">{item.company}</p>
              <p className="text-gray-500 text-sm">{item.duration}</p>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-[#661b1c] rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-[#1b222c] rounded-full opacity-50 animate-bounce"></div>
    </div>
  );
};

export default About;
