import axios from 'axios/index';

export const loginUser = userCredentials => axios({
    method: '/post',
    url: '',
    data: {
        userCredentials
    }
});
