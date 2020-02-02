import { combineReducers } from "redux";
import {USER_INPUT_CHANGE} from "./actions";

const userState = {
    userData: {
        userName: "",
        password: "",
        confirmPassword: "",
        userThumbnail: "",
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
        }
        default:
            return state;
    }
    return state;

}

const appFunctions = combineReducers({
    userManipulation
});

export default appFunctions;