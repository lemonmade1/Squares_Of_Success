function setToken(token) {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  } 
}

function getToken() {
  let token = localStorage.getItem('token');
  if (token) {

    // IF EXPIRED, REMOVE
    const payload = JSON.parse(atob(token.split('.')[1]));
    
    // JWT'S EXPRESSED IN SECONDS, NOT MILLI
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      token = null;
    }
  }
  return token;
}

function getUserFromToken () {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

function removeToken() {
  localStorage.removeItem('token');
}

export default {
  setToken,
  getToken,
  removeToken,
  getUserFromToken
};