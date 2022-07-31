import { IStorageApi, IClipboardHistory } from '../types.ts';

const prodStorageApi: IStorageApi<IClipboardHistory> = {
  getStorage: (key, callback) => {
    chrome.storage.sync.get(['clipHistory'], (data) => {
      callback(data[key]);
    });
  },
  setStorage: (key, val) => {
    chrome.storage.sync.set({ [key]: val });
  }
};

export default prodStorageApi;
