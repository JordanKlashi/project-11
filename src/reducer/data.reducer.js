// reducers/userReducer.js

import { LOAD_USER_DATA } from '../actions/userActions';

const initialState = {
    userData: null
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_USER_DATA:
            // Charger les données du compte utilisateur depuis l'API ou toute autre source
            // Mettre à jour l'état avec les données du compte utilisateur chargées
            return {
                ...state,
                userData: action.payload // Vous pouvez stocker les données utilisateur dans payload
            };
        default:
            return state;
    }
}