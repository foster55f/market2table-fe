export const selectedVendor = (state = '', action) => {
  switch (action.type) {
    case 'ADD_SELECTED_VENDOR':
      return action.id
    default:
      return state
  }
}