import { IStorageApi, IClipboardHistory } from '../types.ts';

const devStorageApi: IStorageApi<IClipboardHistory> = {
  getStorage: (key, callback) => {
    const data = localStorage.getItem(key);
    callback(data ? JSON.parse(data) : undefined);
  },
  setStorage: (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
  },
  initializeStorage: (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
  }
};

export default devStorageApi;
