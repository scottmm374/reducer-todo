export const initialState = [
  {
        task: "Learn about reducers",
        id: Date.now(),
        completed: false
  }];

export function reducer(state, action) {
  //   console.log("stateReducer", state);
  switch (action.type) {
    case "ADD_TASK":
      return state.concat({
            task: action.payload,
            id: Date.now(),
            completed: false     
        });
        case "TOGGLE_COMPLETE":
          return state.map(task => {
            if(task.id === action.payload) {
              return {...task, completed: !task.completed};
            }else {
              return task;
            }
          });
          case "CLEAR_COMPLETED":
            return state.filter(task => !task.completed)

    default:
      return state;
  }
}
