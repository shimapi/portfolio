import { RiMenuFill } from "react-icons/ri";
import { Menu } from "../Menu/Menu";
import "./Header.scss";
import Settings from "../Settings/Settings";
import { useTranslation } from "react-i18next";

const Header = () => {
	const { t } = useTranslation();
	return (
		<>
			<nav className="navbar">
				<div className="navbar__talent">{t("general.CVName")}</div>
				<div className="navbar__icons">
					<Settings />
					<div className="navbar__hamburger">
						<RiMenuFill />
					</div>
				</div>
			</nav>
			<Menu />
		</>
	);
};

export default Header;
