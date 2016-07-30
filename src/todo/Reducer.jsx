import Immutable from 'immutable'

export default (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.push({ key: Date.now(), name: action.name })
    default:
      return state || Immutable.List([])
  }
}

