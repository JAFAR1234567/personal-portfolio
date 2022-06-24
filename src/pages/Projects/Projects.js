import React from "react";
import "./Projects.css";
import ProjectList from "../../helpers/ProjectsList";
import ProjectsDetails from "./ProjectsDetails";
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projectTitle">My Personal Projects</h1>
      <div className="projectList" style={{margin:"0 auto"}}>
        {ProjectList.map((list,index) => (
          <ProjectsDetails key={list.name} name={list.name} img={list.image} id={index}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;
