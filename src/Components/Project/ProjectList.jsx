import React from "react";
import CreateProject from "./CreateProject";

const ProjectList = (props) => {
  return (
    <div>
      {props.projects.map((project, index) => (
        <CreateProject project={project} key={index + 1} index={index + 1} />
      ))}
    </div>
  );
};

export default ProjectList;