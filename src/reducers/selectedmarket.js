export const selectedMarket = (state = '', action) => {
  switch (action.type) {
    case 'ADD_SELECTED_MARKET':
      return action.id
    default:
      return state
  }
}
