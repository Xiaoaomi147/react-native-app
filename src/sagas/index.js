import { take, fork, select, put, call } from 'redux-saga/effects';
import * as authorizeActions from '../actions/types';
import api from '../utils/api';
import { fetchResource } from '../utils/sagaHelper';
import { AsyncStorage } from 'react-native';

const fetchLoginUserApi = fetchResource.bind(null, authorizeActions, api.loginG);

function* watchUSER_LOGIN_IN() {
    while(true) {
      const { payload } = yield take(authorizeActions.USER_LOGIN_IN);
      yield fork( fetchLoginUserApi, payload);
    }
}

function* watchRetrieveUser() {
  while(true) {
    yield take(authorizeActions.RETRIEVE);
    const authrization = yield call(getUserFromStorage);
    if (authrization) {
      const user = JSON.parse(authrization);
      yield put(authorizeActions.setAuthrization(user));
    }
  }
}

// how to use `yield` inside callback?
// https://github.com/redux-saga/redux-saga/issues/508
function getUserFromStorage() {
  return new Promise(resolve => AsyncStorage.getItem('authrization').then(resolve));
}


export default function* rootSaga() {
    yield fork(watchUSER_LOGIN_IN);
    yield fork(watchRetrieveUser);
  }