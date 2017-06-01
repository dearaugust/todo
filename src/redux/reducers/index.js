import { combineReducers } from 'redux'

let todos = [
  { id: 1, content: "hello", completed: false},
  { id: 2, content: "world", completed: false},
  { id: 3, content: "hello", completed: false},
  { id: 4, content: "world", completed: false}
]

function todosReducer(state = todos, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      console.log(action.type, action.index)
      const i = action.index
      // console.log((state[i].completed));
      return [...state.slice(0,i), { ...state[i], completed: !(state[i].completed) }, ...state.slice(i + 1)]
    case 'ADD_TODO':
      return [
        ...state, {
          id: state.length + 1,
          content: action.content,
          completed: false
        }
      ]
    default:
      return state
  }
}
function visibilityFilterReducer(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      console.log(action.filter)
      return action.filter
    default:
      return state
  }
}

let rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export default rootReducer
