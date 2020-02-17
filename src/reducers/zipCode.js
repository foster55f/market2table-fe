export const zipCode = (state = '', action) => {
  switch (action.type) {
    case 'ADD_ZIP_CODE':
      return action.zipCode
    default:
      return state
  }
}
