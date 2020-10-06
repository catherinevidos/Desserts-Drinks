import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/' />
        )
    )}/>
);

const Protected = ({ component: Component, loggedIn, ...rest}) => (
    <Route {...rest} render={props => 
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to='/' />
        )
    }/>
);

const mSTP = state => ({
    loggedIn: state.session.isAuthenticated
});

export const AuthRoute = connect(mSTP)(Auth);
export const ProtectedRoute = connect(mSTP)(Protected);