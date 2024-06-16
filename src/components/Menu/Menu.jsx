import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { LANGUAGES } from "../../assets/constants";

const isActive = ({ isActive }) => `link ${isActive ? "active" : ""}`;

export const Menu = () => {
	const { i18n, t } = useTranslation();

	const onChangeLang = (e) => {
		const lang_code = e.target.value;
		i18n.changeLanguage(lang_code);
	};

	return (
		<nav>
			<div>
				<NavLink className={isActive} to="/">
					{t("home")}
				</NavLink>
				<NavLink className={isActive} to="/about">
					{t("about")}
				</NavLink>
			</div>

			<select defaultValue={i18n.language} onChange={onChangeLang}>
				{LANGUAGES.map(({ code, label }) => (
					<option key={code} value={code}>
						{label}
					</option>
				))}
			</select>
		</nav>
	);
};
