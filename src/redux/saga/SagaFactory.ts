import AppAction from '../action/AppAction';
import { takeEvery } from 'redux-saga/effects';
import getList from './AppSaga';

function* dataSaga() {
  yield takeEvery(AppAction.GET_TRANSACTIONS, getList);
}

export default dataSaga;
