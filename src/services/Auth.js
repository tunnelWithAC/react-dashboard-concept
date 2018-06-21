export function isLoggedIn() {
  return localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null
}

export function login(email, password) {
  // temp token
  const token = email +  password
  // make http request

  // store token in local storage
  localStorage.setItem('token', token)

  // return { 'status': false, 'message': 'failed to login' }
  return { 'status': true, 'message': '' }
}

export function logout() {
  localStorage.removeItem('token')
}
