import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";

import Task from "./Components/Task";
import Menu from "./Components/Menu";
import Projects from "./Components/Projects";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

class App extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/task" element={<Task />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </>
    );
  }
}

const ToDo = (props) => {
  return (
    <HashRouter>
      
        <React.StrictMode>
          <App />
        </React.StrictMode>
      
    </HashRouter>
  );
};
export default ToDo;
