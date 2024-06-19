import { useContext, useState } from "react";
import { ThemeContext } from "../../assets/ThemeContext";
import { useTranslation } from "react-i18next";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const Settings = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const [lang, setLang] = useState("en");

	const { i18n } = useTranslation();
	const toggleLang = () => {
		const selectedLang = lang === "es" ? "en" : "es";
		i18n.changeLanguage(selectedLang);
		setLang(selectedLang);
	};

	return (
		<div className="settings">
			<div className="theme">
				<div className="theme__mode">
					{theme === "light" ? (
						<RiMoonFill onClick={toggleTheme} />
					) : (
						<RiSunFill onClick={toggleTheme} />
					)}
				</div>
			</div>
			<div className="lang">
				<button className="lang__toggle" onClick={toggleLang}>
					{lang === "es" ? "EN" : "ES"}
				</button>
			</div>
		</div>
	);
};

export default Settings;
