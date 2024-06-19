import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./Menu.scss";

const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

export const Menu = () => {
	const { t } = useTranslation();

	return (
		<nav>
			<div className="menu mobile">
				<NavLink className={isActive} to="/">
					{t("general.home")}
				</NavLink>
				<NavLink className={isActive} to="/about">
					{t("general.AboutTitle")}
				</NavLink>
				<NavLink className={isActive} to="/experience">
					{t("general.ExpTitle")}
				</NavLink>
				<NavLink className={isActive} to="/skills">
					{t("general.SkillsTitle")}
				</NavLink>
				<NavLink className={isActive} to="/calendar">
					{t("general.BookTitle")}
				</NavLink>
				<NavLink className={isActive} to="/volunteer">
					{t("general.VolTitle")}
				</NavLink>
				<NavLink className={isActive} to="/cv">
					{t("general.PageCVTitle")}
				</NavLink>
			</div>
		</nav>
	);
};
