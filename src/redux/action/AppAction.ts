import IAction from './IAction';

export default class AppAction {
  public static readonly GET_TRANSACTIONS: string =
    'AppAction.GET_TRANSACTIONS';
  public static readonly LOAD_TRANSACTIONS: string =
    'AppAction.LOAD_TRANSACTIONS';
  public static readonly SHOW_TRANSACTION_LIST: string =
    'AppAction.SHOW_TRANSACTION_LIST';
  public static readonly SHOW_TRANSACTION_DETAIL: string =
    'AppAction.SHOW_TRANSACTION_DETAIL';
  public static readonly POST_TRANSACTION: string =
    'AppAction.POST_TRANSACTION';

  public static getTransactions = (): IAction<String, void> => {
    return {
      type: AppAction.GET_TRANSACTIONS,
    };
  };

  public static updateTransaction(id: number): IAction<number, void> {
    return {
      payload: id,
      type: AppAction.POST_TRANSACTION,
    };
  }
}
