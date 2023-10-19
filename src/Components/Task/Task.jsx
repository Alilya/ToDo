import React, { useState } from "react";
import CreateTask from "./CreateTask";

let Task=(props)=>{
    let [task, setTask] = useState('')
    let onClick=()=>{
        setTask(task);
    }
    return <div>
        <input type="text"></input>
        <button onClick={onClick}>click</button>
        <CreateTask task={task}/>
    </div>
}

export default Task;