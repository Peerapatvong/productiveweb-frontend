const access_token = 'token'

const setToken = (token) => {
  return localStorage.setItem(access_token, token)
}
const getToken = (token) => {
  return localStorage.getItem(access_token)
}

const clearToken = (token) => {
  return localStorage.removeItem(access_token)
}

export { setToken, getToken, clearToken }
