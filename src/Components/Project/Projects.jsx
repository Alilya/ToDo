import React, { useState } from "react";
import Modal from "react-modal";
import style from './Projects.module.sass'

let Projects = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [text,setText] = useState();

  let openModal = () => {
    setModalIsOpen(true);
  };

  let closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div >
      <button onClick={openModal} className={style.buttonOpenWindow}>Открыть модальное окно</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modalWindow}>
        <ModalContent closeModal={closeModal} text={text} />
      </Modal>
    </div>
  );
};

export const ModalContent = (props) => {
  return (
    <div>
      <form action="" className={style.createProject}>
        Number
        <input type="text" placeholder='Заголовок' value={props.text}/>
        <input type="text" placeholder='Описание'/>
        Дата создания<input type="date"/>
        <input type="text" placeholder='Время в работе'/>
        Дата окончания
        <input type="date"/>
        <input type="text" placeholder='Приоритет'/>
        Файл
        <input type="file"/>
        <input type="text" placeholder='Текущий статус'/>
        <input type="text" placeholder="Комментарии"/>
      </form>
      <button onClick={props.closeModal}>Закрыть</button>
    </div>
  );
};

export default Projects;
