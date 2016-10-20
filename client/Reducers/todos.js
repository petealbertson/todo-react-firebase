const defaultState = {
  todos: []
};

export default function (state = defaultState, action) {
  let newState;

  switch (action.type) {
    case 'SET_TODOS':
      newState.todos = action.todos;
      break;
    case 'CREATE_TODO':
      newState.todos = state.todos.concat(action.todo);
      break;
    case 'DELETE_TODO':
      index = state.todos.indexOf(action.todo);
      if (index > -1) {
        newState.todos = state.todos.splice(index, 1);
      }
      break;
    default:
      newState = Object.assign({}, state);
  }

  return newState;
}
