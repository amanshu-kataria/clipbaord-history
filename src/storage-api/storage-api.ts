import { IClipboardHistory, IStorageApi } from '../types.ts';
import devStorageApi from './storage-api.dev';
import prodStorageApi from './storage-api.prod';

// inspired from: https://github.com/ClydeDz/retro-notes-chrome-extension/tree/main/src/api
const storageApi: IStorageApi<IClipboardHistory> = process.env.NODE_ENV === 'development' ? devStorageApi : prodStorageApi;
export default storageApi;
