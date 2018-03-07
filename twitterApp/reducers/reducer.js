const reducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TWEET':
      let newState = [...state, {
        user: action.username,
        handle: action.handle,
        message: action.message,
        date: action.date
      }]
      return newState
    default:
      return state;
  }
}

export default reducer;
