import React, { useEffect, useState } from "react";
import style from "./CreateProject.module.sass";
import useLocalStorageState from "use-local-storage-state";

const CreateProject = (props) => {
  return (
    <div className={style.projectBlock}>
      <p>Id: {props.index || "id"}</p>
      <p>Name: {props.project.projectName || "name"}</p>
      <p>description: {props.project.description || "description"}</p>
      <p>timeCreate: {props.project.timeCreate || "12-08-23"}</p>
      <p>timeInWork: {props.project.timeInWork || "12:00"}</p>
      <p>timeInWork: {props.project.timeFinish || "13-08-23"}</p>
      <p>priority: {props.project.priority || "high"}</p>
      <p>status: {props.project.status || "status"}</p>
      <p>status: {props.project.comment || "comment"}</p>
      <br></br>
    </div>
  );
};

export default CreateProject;
