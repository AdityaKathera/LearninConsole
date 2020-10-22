import { takeLatest } from 'redux-saga/effects';
import { loginUserSaga } from './saga/login'

export default function* saga() {
    yield takeLatest('USER_LOGIN', loginUserSaga)
}