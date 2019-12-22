import CommonService from '../CommonService';
import Transaction from '../../model/transaction/Transaction';
import {apiHost} from '../../util/util';

class TransactionService extends CommonService<Transaction> {
  constructor() {
    super();
    this.rootURL = apiHost;
  }
}

export const transactionService = new TransactionService();
