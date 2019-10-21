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
        })

    default:
      return state;
  }
}
