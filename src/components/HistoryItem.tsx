import { useState } from 'react';
import { FC } from 'react';
import { CopyIcon, DeleteIcon, TickIcon } from '../assets';

interface HistoryItemProps {
  text: string;
  onDelete: () => void;
}

const HistoryItem: FC<HistoryItemProps> = ({ text, onDelete }) => {
  const [isCopied, setCopiedStatus] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStatus(true);
      setTimeout(() => {
        setCopiedStatus(false);
      }, 2000);
    });
  };

  return (
    <div className="history-item">
      <div className="history-item-text">{text} </div>
      <div className="history-item-actions">
        {isCopied ? (
          <img className="history-action-item" src={TickIcon} />
        ) : (
          <img className="history-action-item" src={CopyIcon} onClick={copyToClipboard} />
        )}
        <img className="history-action-item" src={DeleteIcon} onClick={onDelete} />
      </div>
    </div>
  );
};

export default HistoryItem;
