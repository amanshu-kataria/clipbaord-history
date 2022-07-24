import ClipboardHistory from './ClipboardHistory';
import Header from './Header';

function Clipboard() {
  return (
    <div className="clipboard-shell">
      <Header></Header>
      <ClipboardHistory></ClipboardHistory>
    </div>
  );
}

export default Clipboard;
