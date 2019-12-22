import AppAction from '../action/AppAction';
import {takeEvery} from 'redux-saga/effects';
import getList from './GetTransactionSaga';
import updateTransaction from './UpdateTransactionSaga';

function* dataSaga() {
  yield takeEvery(AppAction.GET_TRANSACTIONS, getList);
  yield takeEvery(AppAction.POST_TRANSACTION, updateTransaction);
}

export default dataSaga;
