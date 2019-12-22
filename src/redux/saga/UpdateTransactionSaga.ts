import IAction from '../action/IAction';
import {transactionService} from '../../service/transaction/TransactionService';
import UtilAction from '../action/UtilAction';
import {put} from 'redux-saga/effects';
import AppAction from '../action/AppAction';

function* updateTransaction(action: IAction<string, any>) {
  try {
    const data = yield transactionService.updateTransaction(action.payload!);
    yield put({type: AppAction.POST_TRANSACTION, data: data});
  } catch (e) {
    yield put({type: UtilAction.ERROR, error: 'Cannot process data'});
  }
}

export default updateTransaction;
