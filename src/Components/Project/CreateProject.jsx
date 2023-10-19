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
      {/* <p>Дата создания: {props.project.timeCreate || "2023-08-13"}</p>
      <p>Время в работе: {props.project.timeInWork || "12:00"}</p>
      <p>Дата окончания:{props.project.timeFinish || "2023-08-03"}</p>
      <p>Приоритет: {props.project.priority || "high"}</p>
      <p>Статус: {props.project.status || "status"}</p>
      <p>Комментарий: {props.project.comment || "comment"}</p> */}
      <br></br>
      <button className={style.buttonView} onClick={openModal}>...</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalWindow"
      >
        <ViewMoreModal
          closeModal={closeModal}
          project={props.project}
        />
      </Modal>

    </div>
  );
};

export default CreateProject;
