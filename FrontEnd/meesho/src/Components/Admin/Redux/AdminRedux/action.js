import axios from "axios";
import {FAILURE, GET_SINGLEUSERS_SUCCESS, GET_USERS_SUCCESS, REQUEST} from "./actionTypes";

export const request = () => {
    return {type: REQUEST}
}

export const failure = () => {
    return {type: FAILURE}
}

export const get_user_success = (payload) => {
    return {type: GET_USERS_SUCCESS, payload}
}

export const get_user_list = (dispatch) => {
    dispatch(request())
    axios.get(`http://localhost:8080/user/Adminuserget/`).then((res) => dispatch(get_user_success(res.data))).catch((err) => dispatch(failure()))
}


export const get_singleuser_success = (payload) => {
    return {type: GET_SINGLEUSERS_SUCCESS, payload}
}

export const get_singleuserdetails = (id) => (dispatch) => {
    dispatch(request())
    axios.get(`http://localhost:8080/user/Adminuserget/${id}`).then((res) => dispatch(get_singleuser_success(res.data[0]))).catch((err) => dispatch(failure()))
}
// console.log("res.data",res.data[0])
// dispatch(get_singleuser_success(res.data[0]))
