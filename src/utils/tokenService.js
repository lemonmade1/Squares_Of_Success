const storage = localStorage
const A2B = atob

function setToken (token) {
  if (token) {
    storage.setItem('token', token)
  } else {
    storage.removeItem('token')
  }
}

function getToken () {
  let token = storage.getItem('token')
  if (token) {
    // IF EXPIRED, REMOVE
    const payload = JSON.parse(A2B(token.split('.')[1]))

    // JWT'S EXPRESSED IN SECONDS, NOT MILLI
    if (payload.exp < Date.now() / 1000) {
      storage.removeItem('token')
      token = null
    }
  }
  return token
}

function getUserFromToken () {
  const token = getToken()
  return token ? JSON.parse(A2B(token.split('.')[1])).user : null
}

function removeToken () {
  storage.removeItem('token')
}

export default {
  setToken,
  getToken,
  removeToken,
  getUserFromToken
}
