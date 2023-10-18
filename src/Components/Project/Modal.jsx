import React, { useEffect, useState } from "react";
import style from "./Modal.module.sass";
import "./Projects.sass"
import useLocalStorageState from "use-local-storage-state";
import ProjectList from "./ProjectList";

const ModalContent = ({
  closeModal,
  setProject,
  project,
  addNewProject,
  onChange,
}) => {    
  return (
    <div>  
       <button className={style.buttonClose} 
        onClick={(e) => {
            closeModal();
          }}>X</button>
      <div className={style.createProject_div}>
        <form action="" className={style.createProject}>
          <input
            type="text"
            placeholder="Заголовок"
            value={project.projectName}
            onChange={(e) =>
              setProject({ ...project, projectName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Описание"
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
          />
          Дата создания
          <input type="date"  
          value={project.timeCreate}
            onChange={(e) =>
              setProject({ ...project, timeCreate: e.target.value })
            }/>
          Время в работе
          <input
            type="time"
            value={project.timeInWork}
            onChange={(e) =>
              setProject({ ...project, timeInWork: e.target.value })
            }
          />
          Дата окончания
          <input type="date" 
           value={project.timeFinish}
           onChange={(e) =>
             setProject({ ...project, timeFinish: e.target.value })
           }/>
          <input
            type="text"
            placeholder="Приоритет"
            value={project.priority}
            onChange={(e) =>
              setProject({ ...project, priority: e.target.value })
            }
          />
          Файл
          <input type="file" />
          <input
            type="text"
            placeholder="Текущий статус"
            value={project.status}
            onChange={(e) =>
              setProject({ ...project, status: e.target.value })
            }
          />
          <input
            type="comment"
            placeholder="Комментарий"
            value={project.comment}
            onChange={(e) =>
              setProject({ ...project, comment: e.target.value })
            }
          />
        </form>
        <button className={style.buttonSend}
          type="submit"
          onClick={(e) => {
           addNewProject(project);
            closeModal();
            //onChange(e);
          }}
        >
          {" "}
          Отправить
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
