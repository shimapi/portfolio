import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { getCurrentHost } from "./assets/getCurrentHost";

const savedLang = localStorage.getItem("lang");

i18n
	.use(i18nBackend)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		lng: savedLang || "en",
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
		},
	});

export default i18n;
