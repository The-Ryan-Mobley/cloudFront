
export const USER_INPUT_CHANGE = `USER_INPUT_CHANGE`;
export const USER_AUTHENTICATED_LOGIN_DATA = `USER_AUTHENTICATED_LOGIN_DATA`;

export const userInputChange = (name, value) =>{
    return { type: USER_INPUT_CHANGE, name, value};
}
export const userAuthenticatedLoginData = (userName, email, customToken) => {
    return {type: USER_AUTHENTICATED_LOGIN_DATA, userName, email, customToken};
}