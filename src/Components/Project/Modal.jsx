import React, { useState } from "react";
import style from "./Modal.module.sass";
import useLocalStorageState from "use-local-storage-state";

const ModalContent = (props) => {
  const [text, setText] = useLocalStorageState('value', {defaultValue: "Новый проект"});

  let addNewProject = (e) => {
    console.log(text);
  };

  return (
    <div>
      <form action="" className={style.createProject}>
        Number
        <input
          type="text"
          placeholder="Заголовок"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="text" placeholder="Описание"/>
        Дата создания
        <input type="date" />
        <input type="text" placeholder="Время в работе" />
        Дата окончания
        <input type="date" />
        <input type="text" placeholder="Приоритет" />
        Файл
        <input type="file" />
        <input type="text" placeholder="Текущий статус" />
        <input type="text" placeholder="Комментарии" />
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
