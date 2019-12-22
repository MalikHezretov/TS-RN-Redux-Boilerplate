import CommonModel from '../model/CommonModel';
export default interface iApiMethod<T extends CommonModel> {
  getAll(): Promise<T[]>;
  updateTransaction(id: number): Promise<T | null>;
}
