import React, { useState }  from "react";
import style from "./CreateProject.module.sass";
import Modal from "react-modal";
import ViewMoreModal from "./ViewMoreModal";
import viewMore from "../../Common/png-transparent-eye-see-viewing-icon.png"

const CreateProject = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let openModal = () => {
    setModalIsOpen(true);
  };

  let closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={style.projectBlock}>
      <p> Номер:{props.index || "id"}</p>
      <p>Заголовок:{props.project.projectName || "name"}</p>
      <p>Описание:{props.project.description || "description"}</p>
      <br></br>
      <button className={style.buttonView} onClick={openModal}>
        ...
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalWindow"
      >
        <ViewMoreModal
          closeModal={closeModal}
          project={props.project}
          setProject={props.setProject}
          addNewProject={props.addNewProject}
         
          projects={props.projects}
          index={props.index}
          onDelete={props.onDelete}
        />
      </Modal>

      
    </div>
  );
};

export default CreateProject;
