export interface IStorageApi<T> {
  setStorage: (key: string, value: T[]) => void;
  getStorage: (key: string, callback: (d: T[] | undefined) => void) => void;
  initializeStorage?: (key: string, value: T[]) => void;
}
