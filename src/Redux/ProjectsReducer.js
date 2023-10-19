const ADD_PROJECT = "project/ADD-PROJECT";

let initialState = {
  projectDB: [
    {
      id: 1,
      projectName: "Проект №1",
      description: "Для учебы",
      timeCreate: "12-08-23",
      timeInWork: "12:00",
      timeFinish: "13-08-23",
      priority: "высокий",
      status: "в разработке",
      comment: "Комментарий",
    },
    {
      id: 2,
      projectName: "Проект №2",
      description: "Для работы",
      timeCreate: "12-08-23",
      timeInWork: "12:00",
      timeFinish: "13-08-23",
      priority: "средний",
      status: "ok",
      comment: "comment",
    },
  ],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
        let stateCopy = {
          ...state,
          projectDB: [
            ...state.projectDB,
            {
              id: 3,
              projectName: action.projectName,
              description: action.description,
              timeCreate: action.timeCreate,
              timeInWork: action.timeInWork,
              timeFinish: action.timeFinish,
              priority: action.priority,
              status: action.ok,
              comment: action.comment,
            },
          ],
        };
        return stateCopy;
    default:
      return state;
  }
};

export const addProjectActionCreator = (projectName,description,timeCreate,timeInWork,timeFinish,priority,status,comment) => ({
  type: ADD_PROJECT,
  projectName,description,timeCreate,timeInWork,timeFinish,priority,status,comment
});

export default projectsReducer;
