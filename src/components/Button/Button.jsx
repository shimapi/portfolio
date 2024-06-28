import "./Button.scss";
import { useTranslation } from "react-i18next";
import { getCurrentHost } from "../../assets/getCurrentHost";

const Button = () => {
	const { t, i18n } = useTranslation();

	const downloadCV = () => {
		const fileName = i18n.language.startsWith('es') ? 'Web-Developer_Shirley-Mallea_ES.pdf' : 'Web-Developer_Shirley-Mallea_EN.pdf';
		const downloadUrl = `${getCurrentHost}/cv/${fileName}`;
		window.open(downloadUrl);
	};
	
	return (
		
				<button className="button button-primary" onClick={downloadCV} >
					{t("about.DownloadCV")}
				</button>

	);
};

export default Button;
