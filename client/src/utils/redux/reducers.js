import { combineReducers } from "redux";
import {USER_INPUT_CHANGE, USER_AUTHENTICATED_LOGIN_DATA} from "./actions";

const userState = {
    userData: {
        customToken: "",
        userName: "",
        password: "",
        email: "",
        confirmPassword: "",
        userId: "",
    }
}
const userManipulation = (state = userState, action) => {
    switch(action.type){
        case USER_INPUT_CHANGE: {
            return {
                ...state,
                userData: {
                    ...state.userData,
                    [action.name]: action.value
                }
            };
        };
        case USER_AUTHENTICATED_LOGIN_DATA: {
            return{
                ...state,
                userData: {
                    ...state.userData,
                    userName: action.userName,
                    email: action.email,
                    customToken: action.customToken
                }
            }

        };
        default:
            return state;
    }
    return state;

}

const appFunctions = combineReducers({
    userManipulation
});

export default appFunctions;