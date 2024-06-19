import { RiMenuFill } from "react-icons/ri";
import { Menu } from "../Menu/Menu";
import "./Header.scss";
import Settings from "../Settings/Settings";

const Header = () => {
	return (
		<nav className="navbar">
			<div className="navbar__hamburger">
				<RiMenuFill />
			</div>
			<Settings />
			<Menu />
		</nav>
	);
};

export default Header;
