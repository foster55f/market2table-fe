export const vendors = (state = [], action) => {
    switch (action.type) {
      case 'ADD_VENDORS':
        return action.vendors
      default:
        return state
    }
  }