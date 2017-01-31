import { createStore } from 'redux';

const defaultState = {
  todos: [
    {
      task: 'Inital todo in store',
    },
  ]
};
function todoStore(state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: state.todos.concat([{
          task: action.task,
        }]),
      });
    case 'DELETE_TODO':
      const filteredTodos = state.todos.filter( (filterTodo) => {
        return filterTodo !== action.todo;
      });
      return Object.assign({}, state, {
        todos: filteredTodos
      });
    default:
      return state;
  }
}

export default createStore(todoStore);