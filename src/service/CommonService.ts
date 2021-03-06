import CommonModel from '../model/CommonModel';
import iApiMethod from './iApiMethod';

export default abstract class CommonService<T extends CommonModel>
  implements iApiMethod<T> {
  rootURL: string = '';

  async getAll(): Promise<T[]> {
    try {
      const response = await fetch(this.rootURL);
      if (!response.ok) {
        throw new Error('Cannot get data');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }

  async updateTransaction(id: number): Promise<T | null> {
    try {
      const response = await fetch(this.rootURL + id, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Cannot fetch data');
      }
      return response.json();
    } catch (error) {
      throw error;
    }
  }
}
