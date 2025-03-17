import { useContext, useState } from "react";
import { ThemeContext } from "../../assets/ThemeContext";
import { useTranslation } from "react-i18next";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import "./Settings.scss";

const Settings = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

	const { i18n } = useTranslation();
	
	const toggleLang = () => {
		const selectedLang = lang === "es" ? "en" : "es";
		i18n.changeLanguage(selectedLang);
		setLang(selectedLang);
		document.documentElement.setAttribute("lang", selectedLang);
		localStorage.setItem("lang", selectedLang);
	};

	return (
		<div className="settings">
			<div className="settings__theme">
				<div className="settings__theme-mode">
					{theme === "light" ? (
						<RiMoonClearFill onClick={toggleTheme} />
					) : (
						<RiSunFill onClick={toggleTheme} />
					)}
				</div>
			</div>
			<div className="settings__lang">
				<button className="settings__lang-toggle" onClick={toggleLang}>
					{lang === "es" ? "EN" : "ES"}
				</button>
			</div>
		</div>
	);
};

export default Settings;
