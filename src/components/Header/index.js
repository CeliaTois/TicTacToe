import logo from "../../assets/icons/logo.svg";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import UserMenu from "./components/UserMenu";
import "./style.css";

export default function Header() {
  return (
    <div id="header">
      <div className="element">
        <a href="">
          <img src={logo} alt="logo" id="logo" />
        </a>
        <NavBar />
      </div>
      <div className="element">
        <SearchBar />
        <UserMenu />
      </div>
    </div>
  );
}
