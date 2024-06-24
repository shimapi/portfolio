import { useTranslation } from "react-i18next";
import ExperienceCV from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import About from "../components/About/About";

const PageCV = () => {
	const { t } = useTranslation();
	return (
		<div className="left">
			<About />
			<h4 className="title">{t("general.CVTitle")}</h4>
			<p>{t("about.AboutLong")}</p>
			<ExperienceCV />
			<Education />
			<Skills />
		</div>
	);
};

export default PageCV;
