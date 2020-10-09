import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const LOGIN_NEW_USER = 'LOGIN_NEW_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const UPDATE_USER_THEME = 'UPDATE_USER_THEME';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const loginNewUser = () => ({
    type: LOGIN_NEW_USER
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});

export const updateUserTheme = () => ({
    type: UPDATE_USER_THEME
});

export const signup = user => dispatch => (
    APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.response.data)))
);

// export const theme = user => dispatch => (
//     APIUtil.theme(user)
//     .then(user => dispatch(updateUserTheme))
// )

export const login = user => dispatch => (
    APIUtil.login(user)
        .then(res => {
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            APIUtil.setAuthToken(token);

            const decoded = jwt_decode(token);
            dispatch(receiveCurrentUser(decoded));
        }).catch(err => dispatch(receiveErrors(err.response.data)))
);

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);
    dispatch(logoutCurrentUser());
};

