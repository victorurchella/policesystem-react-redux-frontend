const initialState = {
    activeLogin: {},
    isAuth: false
  };

// authLogin
export default (state = initialState, action) => {

  switch (action.type) {
    case 'AUTHENTICATED_USER':
      return { ...state, activeLogin: action.login , isAuth: action.authed }
    default: 
      return state
  }
}