import tokenService from './tokenService'
import Board from '../components/Board/Board'

const BASE_URL = '/boards'

function buySquare (id) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(id)
  }).then(res => {
    if (res.ok) return res.json()

    // DUPLICATE EMAIL
    throw new Error('Square Taken!')
  })
}

function getAllSquares() {
  return fetch(`${BASE_URL}/squares`, {
    method: 'GET'
  }).then(res => res.json())
}

export default {
  buySquare,
  getAllSquares
}
