import CommonModel from '../CommonModel';

export declare type Transactions = Transaction[];

export declare type UTransaction = Transaction | undefined;

export default interface Transaction extends CommonModel {
  id: number;
  title: string;
  image: string;
  amount: number;
  canRefundIfConfirmed: boolean;
  orderInfo: any;
  externalId: string;
  currency: string;
  waitStatus: string;
}
