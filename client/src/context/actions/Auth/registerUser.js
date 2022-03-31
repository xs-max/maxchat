import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from './../../../constants/ActionTypes'
import axiosInstance from '../../../utils/axiosInstance'

export default  ({email, password, name}) => async (dispatch) => {
    dispatch({
        type: REGISTER_LOADING
    });
    try {
        const res = await axiosInstance.post('/auth/signup', {
            email,
            password,
            name
        });
        localStorage.setItem("token", res?.data.result.token)
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res?.data.result.user,
        });
    }catch(err) {
        console.log(err.response.data.message);
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response?.data.message
        })
    }

}