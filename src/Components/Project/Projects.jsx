import React, { useState } from "react";
import Modal from "react-modal";
import style from './Projects.module.sass'
import CreateProject from "./CreateProject";
import ModalContent from "./Modal";
import useLocalStorageState from "use-local-storage-state";

let Projects = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let openModal = () => {
    setModalIsOpen(true);
  };

  let closeModal = () => {
    setModalIsOpen(false);
  };

  const [name, setName] = useLocalStorageState("newProject", {
    defaultValue: '',
  });

  // const [description, setDescription] = useLocalStorageState("description", {
  //   defaultValue: '',
  // });

  // const [timeInWork, setTimeInWork] = useLocalStorageState("timeInWork", {
  //   defaultValue: Date(0,0),
  // });
  
  // const [priority, setPriority] = useLocalStorageState("priority", {
  //   defaultValue: '',
  // });
  // const [status, setStatus] = useLocalStorageState("status", {
  //   defaultValue: '',
  // });
  
  // const [comment, setComment] = useLocalStorageState("comment", {
  //   defaultValue: '',
  // });

  // let addNewProject = (e) => {
  //   console.log(name);
  // };






  return (
    <div >
      <CreateProject/>
      <button onClick={openModal} className={style.buttonOpenWindow} >Создать новый проект</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={style.modalWindow}>
        <ModalContent closeModal={closeModal} name={name} setName={setName}/>
      </Modal>
      <CreateProject name={name}/>
    </div>
  );
};



export default Projects;
