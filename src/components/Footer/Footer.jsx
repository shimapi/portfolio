import { Menu } from "../Menu/Menu";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer>
			<Menu />
			<button className="button button-primary">{t("AboutCV")}</button>
		</footer>
	);
};

export default Footer;
