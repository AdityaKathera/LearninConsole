const loginUser = (userCredentials) => ({
    type: 'USER_LOGIN',
    userCredentials
});

const loginUserSuccess = (response) => ({
    type: 'USER_LOGIN_SUCCESS',
    response
});

const loginUserError = (error) => ({
    type: 'USER_LOGIN_ERROR',
    error
});

module.exports = {
    loginUser,
    loginUserSuccess,
    loginUserError
}
