import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../action/signin.user";


const initialState = {
    token: null,
    error: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.paylod,
                error: null
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}