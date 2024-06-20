import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import { RiCodeFill, RiUserSmileFill } from "react-icons/ri";

const isActive = ({ isActive }) => `link ${isActive ? "menu-active" : ""}`;

export const Menu = () => {
	const { t } = useTranslation();

	return (
		<nav className="menu header">
			<NavLink className={`menu__link ${isActive}`} to="/about">
				<RiUserSmileFill size={20} /> {t("general.AboutTitle")}
			</NavLink>
			<NavLink className={`menu__link ${isActive}`} to="/experience">
				<RiCodeFill /> {t("general.ExpTitle")}
			</NavLink>
			<NavLink className={`menu__link ${isActive}`} to="/skills">
				{t("general.SkillsTitle")}
			</NavLink>
			<NavLink className={`menu__link ${isActive}`} to="/calendar">
				{t("general.BookTitle")}
			</NavLink>
			<NavLink className={`menu__link ${isActive}`} to="/volunteer">
				{t("general.VolTitle")}
			</NavLink>
			<NavLink className={`menu__link ${isActive}`} to="/cv">
				{t("general.PageCVTitle")}
			</NavLink>
		</nav>
	);
};
