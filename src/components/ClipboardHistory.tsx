import HistoryItem from './HistoryItem';
import { EmptyIcon, HistoryIcon } from '../assets';
import { useEffect, useState } from 'react';

function ClipboardHistory() {
  const [history, setHistory] = useState<string[]>([]);

  const getClipboardHistory = () => {
    chrome.storage.sync.get(['clipHistory'], ({ clipHistory }) => {
      let newHistory: string[] = ['Default Text Copied.'];
      if (clipHistory.length) {
        newHistory = clipHistory;
      }
      setHistory(newHistory);
    });
  };

  useEffect(() => {
    getClipboardHistory();
  }, []);

  return (
    <div className="history">
      {history.length > 0 ? (
        <>
          <div className="history-title">
            <img height={'16px'} src={HistoryIcon} alt="history icon" />
            <span>Text Copy History</span>
          </div>
          <div className="history-list">
            {history.map((item) => {
              return <HistoryItem key={item} text={item}></HistoryItem>;
            })}
          </div>
        </>
      ) : (
        <div className="empty-icon-container">
          <div className="empty-icon">
            <img src={EmptyIcon} alt="Empty" />
            <p className="empty-icon-text">No Data Found</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClipboardHistory;
