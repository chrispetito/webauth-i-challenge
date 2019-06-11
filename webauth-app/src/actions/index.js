import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START})
    return axios
    .post(`http://localhost:4000/api/auth/login`, creds)
    .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: LOGIN_FAIL})
    })
}