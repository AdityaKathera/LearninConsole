const initialState = {
    userDetails: null
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USER_LOGIN': 
        return state;
    case 'USER_LOGIN_SUCCESS': 
        return state.set('userDetails', action.response);
    case 'USER_LOGIN_ERROR':
        return state
    default: 
        return state;
  }
}