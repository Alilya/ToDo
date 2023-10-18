import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import store from './Redux/ReduxStore';
import Task from "./Components/Task/Task";
import Menu from "./Components/Menu/Menu";
import ProjectsContainer from "./Components/Project/ProjectContainer" 
import { Provider } from "react-redux";


<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

class App extends React.Component {

  render() {
    return (
      <>
        <Provider store={store}>
          <Menu />
          <div className="content">
            <Routes>
              <Route path="/task" element={<Task />} />
              <Route path="/projects" element={<ProjectsContainer />} />
            </Routes>
          </div>
        </Provider>
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


// import React from 'react';
// import { Routes, Route, HashRouter, Router } from 'react-router-dom';
// import { Provider, connect } from 'react-redux';
// import Menu from "./Components/Menu/Menu";
// import './App.css';

// import store from './Redux/ReduxStore';
// import Task from "./Components/Task/Task";
// import ProjectsContainer from "./Components/Project/ProjectContainer" 

// <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

// class App extends React.Component {
//   render() {
//     return (
//       <div className="mainSocialNetwork">
//         <Menu />
//         <div className="content">
//           <HashRouter>
//             <Provider store={store}>
//               <React.StrictMode>
//                 <Router>
//                   <Routes>
//                     <Route path="/task" element={<Task />} />
//                     <Route path="/projects" element={<ProjectsContainer />} />
//                   </Routes>
//                 </Router>
//               </React.StrictMode>
//             </Provider>
//           </HashRouter>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
