import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import {Host} from './Host';

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        if (username === 'admin' && password === 'krishna108') 
        {
            localStorage.setItem('username', username);
            // accept all username/password combinations
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
        // const { username, password } = params;
        // const request = new Request(`${Host}/authenticate`, {
        //     method: 'POST',
        //     body: JSON.stringify({ username, password }),
        //     headers: new Headers({ 'Content-Type': 'application/json' }),
        // })
        // return fetch(request)
        //     .then(response => {
        //         if (response.status < 200 || response.status >= 300) {
        //             throw new Error(response.statusText);
        //         }
        //         return response.json();
        //     })
        //     .then(({ token }) => {
        //         localStorage.setItem('token', token);
        //     });
    }
    
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};