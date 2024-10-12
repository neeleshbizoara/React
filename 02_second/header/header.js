import { Logo } from "./logo/logo";
import NavBar from "./navbar/navbar";
import './header.css'
const Header = () => {
  return (
    <div className="header">
      <Logo></Logo>
      <NavBar></NavBar>
    </div>
  );
};

export default Header;
