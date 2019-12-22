import { put } from 'redux-saga/effects';
import { transactionService } from '../../service/transaction/TransactionService';
import AppAction from '../action/AppAction';
import UtilAction from '../action/UtilAction';
import IAction from '../action/IAction';

function* getList(action: IAction<string, any>) {
  try {
    const data = yield transactionService.getAll();
    console.log('SAGA_DATA', data);
    yield put({ type: AppAction.LOAD_TRANSACTIONS, data: data });
  } catch (e) {
    yield put({ type: UtilAction.ERROR, error: 'Cannot load transactions' });
  }
}

export default getList;
