import React from "react";

const CreateTask= (props) => {
  return (
    <div>
      <ul>
        <li>{props.task || "task"}</li>
      </ul>
    </div>
  );
};

export default CreateTask;