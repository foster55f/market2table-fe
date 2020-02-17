export const markets = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MARKETS':
      return action.markets
    default:
      return state
  }
}
