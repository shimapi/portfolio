import "./About.scss";
import { useTranslation } from "react-i18next";

export const About = () => {
	const { t } = useTranslation();

	return (
		<div className="about">
			<h4 className="title">{t("AboutTitle")}</h4>

			<div className="about__greeting">
				<h3 className="about__greeting-hi"> {t("AboutGreeting")} </h3>
				<h1 className="about__greeting-im">{t("AboutName")}</h1>
				<h2 className="about__greeting-short">{t("AboutShort")}</h2>
			</div>
			<button className="button button-primary">{t("AboutCV")}</button>
			<aside className="about__image">
				<img src="" alt="" />
			</aside>
		</div>
	);
};
