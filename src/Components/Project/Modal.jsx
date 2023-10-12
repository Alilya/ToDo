import React, { useState } from "react";
import style from "./Modal.module.sass";
import useLocalStorageState from "use-local-storage-state";

const ModalContent = (props) => {
  // const [name, setName] = useLocalStorageState("newProject", {
  //   defaultValue: '',
  // });

  const [description, setDescription] = useLocalStorageState("description", {
    defaultValue: '',
  });

  const [timeInWork, setTimeInWork] = useLocalStorageState("timeInWork", {
    defaultValue: Date(0,0),
  });
  
  const [priority, setPriority] = useLocalStorageState("priority", {
    defaultValue: '',
  });
  const [status, setStatus] = useLocalStorageState("status", {
    defaultValue: '',
  });
  
  const [comment, setComment] = useLocalStorageState("comment", {
    defaultValue: '',
  });

  let addNewProject = (e) => {
    console.log('name');
  };


  return (
    <div>
      <form action="" className={style.createProject}>
        <input type="text" placeholder="Заголовок" value={props.name} onChange={(e) => props.setName(e.target.value)}/>
        <input type="text" placeholder="Описание"  value={description} onChange={(e) => setDescription(e.target.value)}/>
        Дата создания
        <input type="date" />
        Время в работе
        <input type="time" value={timeInWork} onChange={(e) => setTimeInWork(e.target.value)}/>
        Дата окончания
        <input type="date" />
        <input type="text" placeholder="Приоритет" value={priority}  onChange={(e) => setPriority(e.target.value)}/>
        Файл
        <input type="file" />
        <input type="text" placeholder="Текущий статус" value={status}  onChange={(e) => setStatus(e.target.value)}/>
        <input type="comment" placeholder="Комментарий"  value={comment}  onChange={(e) => setComment(e.target.value)}/>
      </form>
      <button
        type="submit"
        onClick={() => {
          addNewProject();
          props.closeModal();
        }}
      >
        {" "}
        Закрыть
      </button>
    </div>
  );
};
export default ModalContent;
