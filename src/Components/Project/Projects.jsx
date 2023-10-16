import React, { useState } from "react";
import Modal from "react-modal";
import style from "./Projects.module.sass";
import ProjectList from "./ProjectList";
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

  const [projects, setProject] = useState([
    { id: 1, projectName: "hi",description:"description", timeInWork:'12:00',
    priority:'priority',status:'ok',comment:'comment'},
    { id: 2, projectName: "hi2",description:"description", timeInWork:'12:00',
    priority:'priority',status:'ok',comment:'comment' },
  ]);
  
  return (
    <div>
      <button onClick={openModal} className={style.buttonOpenWindow}>
        {"Создать новый проект"}
      </button>
       <ProjectList projects={projects} /> 
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={style.modalWindow}
      >
        <ModalContent
          closeModal={closeModal}
          projects={projects}
          setProject={setProject}
        /> 
      </Modal>
    </div>
  );
};

export default Projects;
