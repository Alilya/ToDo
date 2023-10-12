import React, { useState } from "react";
import Modal from "react-modal";
import style from './Projects.module.sass'
import CreateProject from "./CreateProject";
import ModalContent from "./Modal";

let Projects = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let openModal = () => {
    setModalIsOpen(true);
  };

  let closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div >
      <CreateProject/>
      <button onClick={openModal} className={style.buttonOpenWindow} >Создать новый проект</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modalWindow}>
        <ModalContent closeModal={closeModal}/>
      </Modal>
    </div>
  );
};



export default Projects;
