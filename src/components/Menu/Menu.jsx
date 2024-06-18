import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

export const Menu = () => {
	const { t } = useTranslation();

	return (
		<nav>
			<div>
				<NavLink className={isActive} to="/">
					{t("home")}
				</NavLink>
				<NavLink className={isActive} to="/about">
					{t("AboutTitle")}
				</NavLink>
				<NavLink className={isActive} to="/experience">
					{t("ExpTitle")}
				</NavLink>
				<NavLink className={isActive} to="/skills">
					{t("SkillsTitle")}
				</NavLink>
				<NavLink className={isActive} to="/calendar">
					{t("BookTitle")}
				</NavLink>
				<NavLink className={isActive} to="/volunteer">
					{t("VolTitle")}
				</NavLink>
			</div>
		</nav>
	);
};
