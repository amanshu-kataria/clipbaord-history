import { useState } from 'react';
import { FC } from 'react';
import { CopyIcon } from '../assets';

interface HistoryItemProps {
  text: string;
}

const HistoryItem: FC<HistoryItemProps> = ({ text }) => {
  const [, setCopiedStatus] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedStatus(true);
      },
      () => {
        //
      }
    );
  };

  return (
    <div className="history-item">
      <div className="history-item-text">{text} </div>
      <div className="copy-icon-container">
        <img className="copy-icon" src={CopyIcon} onClick={copyToClipboard} />
      </div>
    </div>
  );
};

export default HistoryItem;
