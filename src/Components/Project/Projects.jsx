import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import style from "./Projects.sass";
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
    setProject('');

  };
 
  return (
    <div>
      <button onClick={openModal} className="buttonOpenWindow">
        {"Создать новый проект"}
      </button>
      <ProjectList projects={projects} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalWindow"
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
