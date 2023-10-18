import React, { useEffect, useState } from "react";
import style from "./CreateProject.module.sass";
import useLocalStorageState from "use-local-storage-state";

const CreateProject = (props) => {
  return (
    <div className={style.projectBlock}>
      <p>id: {props.index || "id"}</p>
      <p>Заголовок: {props.project.projectName || "name"}</p>
      <p>Описание: {props.project.description || "description"}</p>
      <p>Дата создания: {props.project.timeCreate || "2023-08-13"}</p>
       <p>Время в работе: {props.project.timeInWork || "12:00"}</p>
      <p>Дата окончания: {props.project.timeFinish || "2023-08-03"}</p>
      <p>Приоритет: {props.project.priority || "high"}</p>
      <p>Статус: {props.project.status || "status"}</p>
      <p>Комментарий: {props.project.comment || "comment"}</p>
      <br></br>
    </div>
  );
};

export default CreateProject;
