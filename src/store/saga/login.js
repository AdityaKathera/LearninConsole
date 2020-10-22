import { call, put } from 'redux-saga/effects';
import { loginUserSuccess, loginUserError } from '../action/login';
import { loginUser } from '../service/login'

export function* loginUserSaga(action) {
    try {
        console.log(action.userCredentials)
      const response = yield call(loginUser, action.userCredentials);
      yield put(loginUserSuccess('response'));
    } catch(error) {
      yield put(loginUserError(error));
    }
}
