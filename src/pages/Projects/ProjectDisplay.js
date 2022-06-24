
import React from "react";
import { useParams } from "react-router-dom";
import ProjectsList  from "../../helpers/ProjectsList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  console.log("this is id",id);
  const project = ProjectsList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="img"/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}
export default ProjectDisplay