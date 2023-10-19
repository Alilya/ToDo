import React from "react";
import style from "./Modal.module.sass";
import "./Projects.sass"

const ViewMoreModal = ({
  closeModal,
  project,
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
        {/* <button className={style.buttonSend}
          type="submit"
          onClick={(e) => {
            closeModal();
            //onChange(e);
          }}
        >
          {" "}
          Отправить
        </button> */}
      </div>
    </div>
  );
};

export default ViewMoreModal;
