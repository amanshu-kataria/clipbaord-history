import HistoryItem from './HistoryItem';
import { EmptyIcon, HistoryIcon } from '../assets';
import { useEffect, useState } from 'react';
import { IClipboardHistory } from '../types.ts';
import storageApi from '../storage-api/storage-api';
import devData from '../constants/dev-data';

function ClipboardHistory() {
  const [history, setHistory] = useState<IClipboardHistory[]>([]);

  const getClipboardHistory = () => {
    storageApi.getStorage('clipHistory', (clipHistory) => {
      let newHistory: IClipboardHistory[] = [];
      if (clipHistory && clipHistory.length) {
        newHistory = clipHistory;
      }
      setHistory(newHistory);
    });
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && storageApi.initializeStorage) {
      storageApi.initializeStorage('clipHistory', devData);
    }
    getClipboardHistory();
  }, []);

  const onItemDelete = (index: number) => {
    const newHistory = [...history];
    newHistory.splice(index, 1);
    setHistory(newHistory);
    storageApi.setStorage('clipHistory', newHistory);
  };

  return (
    <div className="history">
      {history.length > 0 ? (
        <>
          <div className="history-title">
            <img height={'16px'} src={HistoryIcon} alt="history icon" />
            <span>Text Copy History</span>
          </div>
          <div className="history-list">
            {history.map((item, index) => {
              return <HistoryItem key={item.id} text={item.text} onDelete={() => onItemDelete(index)}></HistoryItem>;
            })}
          </div>
        </>
      ) : (
        <div className="empty-icon-container">
          <div className="empty-icon">
            <img src={EmptyIcon} alt="Empty" height={'80px'} />
            <p className="empty-icon-text">No copied text found. Try copying a text.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClipboardHistory;
