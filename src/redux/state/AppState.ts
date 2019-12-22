import { Transactions } from '../../model/transaction/Transaction';
import IState from './IState';

export default interface AppState extends IState {
  transactions: Transactions;
}
