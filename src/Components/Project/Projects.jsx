import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import style from "./Projects.module.sass";
import ProjectList from "./ProjectList";
import ModalContent from "./Modal";
import useLocalStorageState from "use-local-storage-state";
import CreateProject from "./CreateProject";

let Projects = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let openModal = () => {
    setModalIsOpen(true);
  };

  let closeModal = () => {
    setModalIsOpen(false);
  };

  const [projects, setProjects] = useLocalStorageState("projects", []);
  const [project, setProject] = useState("");

  let addNewProject = (project) => {
    setProjects([...projects, project]);
    setProject(project);

  };
 
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
          project={project}
          setProject={setProject}
          addNewProject={addNewProject}
        />
      </Modal>
    </div>
  );
};

export default Projects;
