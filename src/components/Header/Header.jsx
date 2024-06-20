import { RiMenu4Fill } from "react-icons/ri";
import { Menu } from "../Menu/Menu";
import "./Header.scss";
import Settings from "../Settings/Settings";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Header = () => {
	const { t } = useTranslation();
	return (
		<>
			<nav className="navbar">
				<div className="navbar__talent">
					<NavLink to="/">{t("general.CVName")}</NavLink>
				</div>
				<div className="navbar__icons">
					<Settings />
					<div className="navbar__hamburger">
						<RiMenu4Fill />
					</div>
				</div>
			</nav>
			<Menu />
		</>
	);
};

export default Header;
