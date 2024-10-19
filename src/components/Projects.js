import React, { useState } from "react";
import "./Projects.css";
import Modal from "./Modal";
import ProjectAccordion from "./ProjectAccordion";

const Projects = () => {
  const [openKeys, setOpenKeys] = useState({});
  const [modalImage, setModalImage] = useState(null);

  const projectCategories = {
    js: {
      title: "JavaScript",
      projects: [
        {
          name: "MERN Social Network",
          description:
            "A fully interactive social network with real-time updates and feed built with the MERN stack (MongoDB, Express, React, Node.js). Users can create profiles, make posts and some more",
          image: "gifs/SocialNetwork.gif",
          technologies: [
            {
              name: "React",
              details:
                "Used for building the user interface with a component-based architecture.",
            },
            {
              name: "Node.js",
              details:
                "Used for backend development, enabling JavaScript to run on the server.",
            },
            {
              name: "Express",
              details:
                "A web application framework for Node.js that simplifies routing and server-side logic.",
            },
            {
              name: "MongoDB",
              details: "A NoSQL database used for storing user data and posts.",
            },
            {
              name: "JWT",
              details:
                "JSON Web Tokens used for user authentication and session management.",
            },
          ],
          location: "https://github.com/GitEagleY/MERN_SocialNetwork",
        },
        {
          name: "FactFlow",
          description:
            "A fullstack web application designed for users to share and discover interesting facts across various categories. Users can submit facts, upvote their favorites, and explore a curated selection of user-generated content.",
          image: "gifs/Facts.gif",
          technologies: [
            {
              name: "React",
              details:
                "Used for building the user interface with an interactive, component-based approach.",
            },
            {
              name: "Supabase",
              details:
                "An open-source alternative to Firebase for database management, providing authentication and real-time data capabilities.",
            },
          ],
          location: "https://github.com/GitEagleY/LearnSomethingNew",
        },
      ],
    },
    python: {
      title: "Python",
      projects: [
        {
          name: "Event Management System",
          description:
            "A simple event management system built with Django for event creation and management. The app uses SQLite as the database, Django Templates for rendering the frontend, and Tailwind CSS for styling.",
          image: "gifs/EventManagementSystem.gif",
          technologies: [
            {
              name: "Django",
              details: "Web framework for building web applications",
            },
            {
              name: "SQLite",
              details: "Database management system used for data storage",
            },
            {
              name: "Tailwind CSS",
              details: "Utility-first CSS framework for styling web pages",
            },
          ],
          location: "https://github.com/GitEagleY/Event-Management-System",
        },
        {
          name: "Flask hCaptcha Integration",
          description:
            "A simple Flask application that integrates hCaptcha for spam protection and bot detection on forms.",
          image: "gifs/hCaptcha.gif",
          technologies: [
            { name: "Flask", details: "Lightweight web framework for Python" },
            {
              name: "hCaptcha",
              details: "Provides bot protection and spam prevention on forms",
            },
          ],
          location: "https://github.com/GitEagleY/Flask_hCaptcha",
        },
        {
          name: "Flask TODO CRUD App",
          description:
            "A basic TODO application built with Flask for the backend, jQuery for interactivity, and Bulma for styling. Users can create, read, update, and delete TODO items.",
          image: "gifs/Todo.gif",
          technologies: [
            { name: "Flask", details: "Lightweight web framework for Python" },
            {
              name: "jQuery",
              details: "JavaScript library for interactive web applications",
            },
            { name: "Bulma", details: "CSS framework for responsive design" },
          ],
          location: "Personal Website",
        },
      ],
    },
    golang: {
      title: "Golang",
      projects: [
        {
          name: "Bookings Web Application",
          description:
            "A web application for managing bookings, built using Go and PostgreSQL.",
          image: "gifs/GoBooking.gif",
          technologies: [
            {
              name: "Go",
              details:
                "The Go programming language is required for compiling and running the app.",
            },
            {
              name: "PostgreSQL",
              details: "Relational database management system.",
            },
            {
              name: "Soda CLI",
              details: "A CLI tool for managing database migrations.",
            },
            {
              name: "Mail server",
              details: "MailHog for testing email functionality.",
            },
          ],
          location: "https://github.com/GitEagleY/BookingsWebApp/tree/main",
        },
        {
          name: "Microservices Showcase",
          description:
            "A showcase of microservices architecture built using multiple technologies including RabbitMQ, Docker, and Go. The application demonstrates various communication protocols like REST, RPC, and gRPC.",
          image: "gifs/MicroservicesShow.gif",
          technologies: [
            {
              name: "RabbitMQ",
              details:
                "Message broker for handling communication between services.",
            },
            {
              name: "Docker",
              details:
                "Containerization platform used for deploying microservices.",
            },
            {
              name: "Go",
              details: "Programming language used for development.",
            },
            {
              name: "gRPC",
              details:
                "A high-performance RPC framework for communication between services.",
            },
            {
              name: "REST",
              details:
                "Representational State Transfer protocol for API communication.",
            },
            {
              name: "PostgreSQL",
              details:
                "Relational database management system for STRUCTURED data storage.",
            },
            {
              name: "MongoDB",
              details: "NoSQL database for handling UNSTRUCTURED data.",
            },
          ],
          location:
            "https://github.com/GitEagleY/Go-Services-Showcase/tree/main",
        },
        {
          name: "Grpc-Blog",
          description:
            "A blog application built with Go, utilizing gRPC for efficient communication between services.",
          image: "gifs/GrpcBlog.gif",
          technologies: [
            {
              name: "gRPC",
              details:
                "Remote procedure call (RPC) framework for communication.",
            },
            {
              name: "Go",
              details: "Programming language used for the application.",
            },
          ],
          location: "https://github.com/GitEagleY/Grpc-Blog",
        },
        {
          name: "WebSockets-Chat",
          description:
            "A real-time chat application built with Go and WebSockets for bidirectional communication between users.",
          image: "gifs/WebSocketsChat.gif",
          technologies: [
            {
              name: "WebSockets",
              details: "Protocol for real-time bidirectional communication.",
            },
            {
              name: "Go",
              details: "Programming language used for the application.",
            },
          ],
          location: "https://github.com/GitEagleY/WebSockets-Chat",
        },
        {
          name: "RESTful API Go",
          description:
            "A RESTful API built with Go, implementing standard CRUD operations.",
          image: "gifs/RESTfulGo.gif",
          technologies: [
            {
              name: "REST",
              details: "Representational State Transfer for API communication.",
            },
            {
              name: "Go",
              details: "Programming language used for building the API.",
            },
          ],
          location: "https://github.com/GitEagleY/RESTful-Go",
        },
      ],
    },
  };
  const handleToggle = (categoryKey, index) => {
    setOpenKeys((prevKeys) => ({
      ...prevKeys,
      [categoryKey]: prevKeys[categoryKey] === index ? null : index,
    }));
  };

  const openImageModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeImageModal = () => {
    setModalImage(null);
  };

  if (!projectCategories || typeof projectCategories !== "object") {
    return <div>No project categories available.</div>;
  }

  return (
    <section id="projects">
      <h1>Projects</h1>
      <p className="note">(All images are clickable)</p>
      {Object.entries(projectCategories).map(([categoryKey, category]) => (
        <section key={categoryKey} id={categoryKey}>
          <h3>{category.title}</h3>
          {category.projects && category.projects.length > 0 ? (
            category.projects.map((project, index) => (
              <ProjectAccordion
                key={index}
                project={{ ...project, category: categoryKey }}
                index={index}
                openKey={openKeys[categoryKey]}
                handleToggle={() => handleToggle(categoryKey, index)}
                openImageModal={openImageModal}
              />
            ))
          ) : (
            <p>No projects available in this category.</p>
          )}
        </section>
      ))}

      {/* Modal for image */}
      <Modal imageSrc={modalImage} onClose={closeImageModal} />
    </section>
  );
};

export default Projects;
