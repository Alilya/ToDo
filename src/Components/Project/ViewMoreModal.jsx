import React from "react";
import style from "./ViewModal.module.sass";
import "./Projects.sass"

const ViewMoreModal = ({
  closeModal,
  project,
  setProject,
  addNewProject,
  onDelete,
  index,

}) => {    
  // setProject('');
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
            
          />
          Дата создания
          <input type="date"  
          value={project.timeCreate}
           />
          Время в работе
          <input
            type="time"
            value={project.timeInWork}
            
          />
          Дата окончания
          <input type="date" 
           value={project.timeFinish}
           />
          <input
            type="text"
            placeholder="Приоритет"
            value={project.priority}
            
          />
          Файл
          <input type="file" />
          <input
            type="text"
            placeholder="Текущий статус"
            value={project.status}
            
          />
          <input
            type="comment"
            placeholder="Комментарий"
            value={project.comment}
            
          />
        </form>

        <button
        onClick={onDelete.bind(undefined, index - 1)}
        className={style.buttonDelete}
      >
        Удалить проект
      </button>

          <button className={style.buttonSend}
          type="submit"
          onClick={(e) => {
            addNewProject(project);
            closeModal();
            //onChange(e);
          }}
        >
          {" "}
          Изменить
        </button> 
      </div>
    </div>
  );
};

export default ViewMoreModal;
