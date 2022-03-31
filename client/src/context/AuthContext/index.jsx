import {createContext, useReducer} from 'react';
import authInitialState from './authInitialState';
import authReducer  from './authReducer';

export const AuthContext = createContext({});

const AuthProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(authReducer, authInitialState);

    return (
        <AuthContext.Provider value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;