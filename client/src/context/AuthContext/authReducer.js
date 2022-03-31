import { REGISTER_FAIL,REGISTER_LOADING, REGISTER_SUCCESS, LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT_USER } from '../../constants/ActionTypes'

const auth = (state, {type, payload}) => {
    switch (type) {
        case REGISTER_LOADING:
            return {...state, loading: true};
        case REGISTER_SUCCESS:
            return {...state, loading: false, data: payload};
        case REGISTER_FAIL:
            return {...state, loading: false, error: payload};
        case LOGIN_START:
            return {...state, loading: true, data: payload};
        case LOGIN_SUCCESS:
            return {...state, loading: false, data: payload, isLoggedIn: true};
        case LOGIN_FAIL:
            return {...state, loading: false, error: payload};
        case LOGOUT_USER:
            return {
                ...state,
                loading: false,
                data: null,
                isLoggedIn: false,
            };
        default:
            return state;
    }
}

export default auth