import React, { useState } from "react";
import style from "./Modal.module.sass";
import useLocalStorageState from "use-local-storage-state";
import ProjectList from "./ProjectList";

const ModalContent = ({closeModal,setProject, projects}) => {
  let addNewProject = (e) => {
    e.preventDefault();
    
    const newProject = {
      id: Date.now(),
      projectName: projects.projectName,
      description: projects.description,
      timeInWork: projects.timeInWork,
      priority: projects.priority,
      status: projects.statusProject,
      comment: projects.comment,
    };
    setProject([...projects,newProject]);
  };

  return (
    <div>
      <div className={style.createProject_div}>
        <form action="" className={style.createProject}>
          <input
            type="text"
            placeholder="Заголовок"
            value={projects.projectName}
            onChange={(e) => setProject({...projects, projectName: e.target.value})}
          />
          <input
            type="text"
            placeholder="Описание"
            value={projects.description}
           onChange={(e) => setProject({...projects, projectName: e.target.value})}
          />
          Дата создания
          <input type="date" />
          Время в работе
          <input
            type="time"
            value={projects.timeInWork}
           onChange={(e) => setProject({...projects, projectName: e.target.value})}
          />
          Дата окончания
          <input type="date" />
          <input
            type="text"
            placeholder="Приоритет"
            value={projects.priority}
           onChange={(e) => setProject({...projects, projectName: e.target.value})}
          />
          Файл
          <input type="file" />
          <input
            type="text"
            placeholder="Текущий статус"
            value={projects.statusProject}
           onChange={(e) => setProject({...projects, projectName: e.target.value})}
          />
          <input
            type="comment"
            placeholder="Комментарий"
            value={projects.comment}
           onChange={(e) => setProject({...projects, projectName: e.target.value})}
          />
        </form>
        <button
          type="submit"
          onClick={(e) => {
            addNewProject(e);
            closeModal();
          }}
        >
          {" "}
          Закрыть
        </button>
      
      </div>
    </div>
  );
};
export default ModalContent;
