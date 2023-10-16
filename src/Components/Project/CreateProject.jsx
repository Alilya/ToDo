import React, { useState } from "react";
import style from "./CreateProject.module.sass";

const CreateProject = (props) => {
  return (
    <div className={style.projectBlock}>
       <p>Id: {props.index || "id"}</p>
       <p>Name: {props.project.projectName || "name"}</p>
       <p>description: {props.project.description || "description"}</p>
       <p>timeInWork: {props.project.timeInWork || "timeInWork"}</p>
       <p>priority: {props.project.priority || "priority"}</p>
       <p>status: {props.project.status || "status"}</p>
       <br></br> 
     </div>
  );
};

export default CreateProject;
