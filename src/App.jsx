import React from "react";
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

const App = () => {
  const sections = [
    { id: "home", name: "Home", component: <Home /> },
    { id: "about", name: "About Me", component: <About /> },
    { id: "projects", name: "Projects", component: <Projects /> },
    { id: "contact", name: "Contact", component: <Contact /> },
  ];

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
    <div className="min-h-screen font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
        <div className="container mx-auto flex justify-center space-x-6 py-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              activeClass="text-yellow-400 border-b-2 border-yellow-400"
              to={section.id}
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset if you have a fixed header
              duration={500}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              {section.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Sections */}
      <div className="sections pt-16">
        {sections.map((section) => (
          <Element
            key={section.id}
            name={section.id}
            className="section min-h-screen bg-gray-100 py-10"
          >
            {section.component}
          </Element>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-yellow-400 text-white p-3 rounded-full shadow-md hover:bg-yellow-500 transition"
      >
        &#8679; Top
      </button>
    </div>
  );
};

export default App;
