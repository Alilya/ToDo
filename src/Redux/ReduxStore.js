import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from "redux"; 
import projectsReducer from "./ProjectsReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    projects: projectsReducer,
  });
  
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(
      applyMiddleware(thunkMiddleware)
    ));
  
  
  export default store;