import Transaction from '../../../model/transaction/Transaction';
import IState from '../IState';

export default interface TransactionDetailState extends IState {
  transaction?: Transaction;
}
