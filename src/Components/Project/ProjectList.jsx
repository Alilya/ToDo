import React from "react";
import CreateProject from "./CreateProject";

const ProjectList = (props) => {
  return (
    <div>
      {/* {props.projects.map((project, index) => (
        <CreateProject index={index + 1} 
        project={project} key={project.id} />
      ))} */}

      {props.projects.map((project) => (
        <CreateProject project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectList;