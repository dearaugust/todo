let todos = [
  { id: 1, title: "hello", completed: false},
  { id: 2, title: "world", completed: false},
  { id: 3, title: "hello", completed: false},
  { id: 4, title: "world", completed: false}
]

function rootReducer(state = todos, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      const i = action.id - 1
      console.log((state[i].completed));
      return [...state.slice(0,i), { ...state[i], completed: !(state[i].completed) }, ...state.slice(i + 1)]
    default:
      return state
  }
}

export default rootReducer
