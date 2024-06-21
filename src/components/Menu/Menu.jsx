import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { RiCodeFill, RiUserSmileFill } from "react-icons/ri";

const isActive = ({ isActive }) => `link ${isActive ? "menu-active" : ""}`;

const Menu = ({ showMenu, menuType }) => {
	const { t } = useTranslation();

	console.log(showMenu, "showmenu", menuType, "menuType");

	return (
		<nav className={`menu navbar__${showMenu}`}>
			<NavLink className={`menu__link ${isActive}`} to="/about">
				<RiUserSmileFill size={20} /> {t("general.AboutTitle")}
			</NavLink>
			<NavLink className={`menu__link ${isActive}`} to="/experience">
				<RiCodeFill /> {t("general.ExpTitle")}
			</NavLink>
			<NavLink className={`menu__link ${isActive}`} to="/skills">
				<RiUserSmileFill size={20} /> {t("general.SkillsTitle")}
			</NavLink>
			<NavLink className={`menu__link ${isActive}`} to="/calendar">
				<RiUserSmileFill size={20} /> {t("general.BookTitle")}
			</NavLink>
			<NavLink className={`menu__link ${isActive}`} to="/volunteer">
				<RiUserSmileFill size={20} /> {t("general.VolTitle")}
			</NavLink>
			<NavLink className={`menu__link ${isActive}`} to="/cv">
				<RiUserSmileFill size={20} /> {t("general.PageCVTitle")}
			</NavLink>
		</nav>
	);
};

export default Menu;
