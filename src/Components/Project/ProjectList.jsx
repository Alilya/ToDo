import React from "react";
import CreateProject from "./CreateProject";

const ProjectList = (props) => {
  return (
    <div>
      {props.projects.map((project, index) => (
        <CreateProject
          project={project}
          projects={props.projects}
          key={index + 1}
          index={index + 1}
          setProject={props.setProject}
          addNewProject={props.addNewProject}

          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
};

export default ProjectList;
