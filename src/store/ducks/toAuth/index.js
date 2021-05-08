export const selectAuthState = state => state.authLogin;

function altAuth(login, authed) {
  return {
    type: 'AUTHENTICATED_USER',
    login,
    authed
  }
}

export const selectors = {
  selectAuthState,
}
export default altAuth