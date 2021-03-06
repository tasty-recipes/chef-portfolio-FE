import axios from 'axios';

export const BLOG_START = 'BLOG_START';
export const BLOG_SUCCESS = 'BLOG_SUCCESS';
export const BLOG_FAILURE = 'BLOG_FAILURE';
export const blogLoad = () => dispatch => {
    dispatch({ type: BLOG_START });
    return axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
    .then(res => {
        dispatch({ type: BLOG_SUCCESS, payload: res.data.meals })
    })
    .catch(err => {
        console.log(err);
    });
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = (creds) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios.post('https://tasty-recipes.herokuapp.com/api/login', creds)
    .then(res => {
        console.log(res.data);
        localStorage.setItem('token', res.data);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: LOGIN_FAILURE, payload: err });
    });
}



export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const signUp = (creds) => dispatch => {
    dispatch({ type: SIGN_UP_START });
                    {/* https://tasty-recipes.herokuapp.com/api/register */}
    return axios.post('https://tasty-recipes.herokuapp.com/api/register')
}

export const SIGN_OUT_START = 'SIGN_OUT_START';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
export const signOut = () => dispatch => {
    dispatch({ type: SIGN_OUT_START });
    return axios.get('https://chefio.herokuapp.com/oauth/revoke-token')
    .then(res => {
        console.log(res);
        dispatch({ type: SIGN_OUT_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: SIGN_OUT_FAILURE, payload: err });
    });
}

export const NEW_USER_START = 'NEW_USER_START';
export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS';
export const NEW_USER_FAILURE = 'NEW_USER_FAILURE';
export const newUser = (creds) => dispatch => {
    dispatch({ type: NEW_USER_START });
    return axios.post('https://tasty-recipes.herokuapp.com/api/register', creds)
    .then(res => {
        console.log(res);
        dispatch({ type: NEW_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: NEW_USER_FAILURE, payload: err });
    });
}

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const users = () => dispatch => {
    dispatch({ type: FETCH_USERS_START });
    return axios.get('https://chefio.herokuapp.com/users/users', {

        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Accept': 'application/json'
    })
    .then(res => {
        console.log(res);
        dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_USERS_FAILURE, payload: err });
    });
}

{ /* Authorization: `Bearer ${localStorage.getItem('token')} */}

{/* 'https://chefio.herokuapp.com/oauth/token', `grant_type=password&username=${creds.username}&password=${creds.password}`, {
        headers: {
            Authorization: `Basic ${btoa('chef-client:chef-secret')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }*/}

    {/* 'https://chefio.herokuapp.com/createnewuser', `{"username": "${creds.username}", "password": "${creds.password}", "fname": "${creds.fname}", "lname": "${creds.lname}" }`, {
        headers: {
            Authorization: `Basic ${btoa('chef-client:chef-secret')}`,
            'Content-Type': 'application/json'
        }
    } */}