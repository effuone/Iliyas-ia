import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";
import { getAllProjects } from "../api/projects";
function CarouselComponent() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <Carousel className="ms-5 me-5">
      {projects.map((project, index) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={project.image}
            alt={project.title}
            style={{height: 'auto', width: '80%'}}
          />
          <Carousel.Caption>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
