import { Logo } from '../assets';

function Header() {
  return (
    <div className="header">
      <img height="20px" src={Logo} alt="Logo" />
      <div className="header-title">Clipboard</div>
    </div>
  );
}

export default Header;
