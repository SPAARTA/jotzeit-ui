const jot = (state, action) => {
  switch (action.type) {

    case 'CREATE_JOT':
      return { text: action.text }

    case 'UPDATE_JOT':
      if (state.id !== action.id) {
        return state
      }
      return { ...state, text: action.text }

    default:
      return state
  }
}

export default (state=[], action) => {
  switch (action.type) {

    case 'CREATE_JOT':
      return [ ...state, jot(undefined, action) ]

    case 'UPDATE_JOT':
      return state.map(j => jot(j, action))

    default:
      return state
  }
}
