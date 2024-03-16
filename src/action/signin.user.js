import axios from "axios"


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/login', {
                email,
                password
            }, {
                header: {
                    'content-Type': 'application/json'
                }
            });

            const token = response.data.body.token;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: token
            });
        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.message
            });
        }
    };
};

