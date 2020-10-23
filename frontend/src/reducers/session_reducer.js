import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, LOGIN_NEW_USER} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    currentUser: {}
};

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            debugger
            return {
                ...state,
                isAuthenticated: !!action.currentUser,
                currentUser: action.currentUser
            };
        case LOGOUT_CURRENT_USER:
            return {
                isAuthenticated: false,
                currentUser: {}
            };
        case LOGIN_NEW_USER:
            return {
                ...state,
                isSignedIn: true
            };
        default:
            return state;
    }
};