import React, { useState } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Logo from "../src/assets/Logo.png";

const App = () => {
  const sections = [
    { id: "home", name: "Home", component: <Home /> },
    { id: "about", name: "About Me", component: <About /> },
    { id: "projects", name: "Projects", component: <Projects /> },
    { id: "contact", name: "Contact", component: <Contact /> },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    Events.scrollEvent.register("begin", () => {
      console.log("Scroll started");
    });

    Events.scrollEvent.register("end", () => {
      console.log("Scroll ended");
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="min-h-screen font-sans ">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-[#1b222c] text-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-5 md:px-10">
          {/* Logo */}
          <div className="text-xl font-bold">
            <a href="#" onClick={scrollToTop} className="cursor-pointer">
              <img src={Logo} alt="Logo" className="h-12 rounded-full" />
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Links */}
          <div
            className={`flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full bg-[#1b222c] md:bg-transparent transition-transform transform md:translate-x-0 md:justify-end ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-y-0`}
          >
            {sections.map((section) => (
              <Link
                key={section.id}
                activeClass="border-b-2 border-white"
                to={section.id}
                spy={true}
                smooth={true}
                offset={-70} // Adjust offset if you have a fixed header
                duration={500}
                className="cursor-pointer text-white px-5 py-2 md:px-0 md:py-0 hover:text-gray-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div className="sections">
        {sections.map((section) => (
          <Element
            key={section.id}
            name={section.id}
            className="section min-h-screen bg-[#12151c] w-full"
          >
            {section.component}
          </Element>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-[#661b1c] text-white p-3 rounded-full shadow-md hover:bg-[#531516] transition"
      >
        &#8679; Top
      </button>
    </div>
  );
};

export default App;
