import { useTranslation } from "react-i18next";
import ExperienceCV from "../components/Experience/Experience";
import Skills from "../components/Skills/Skills";

const PageCV = () => {
	const { t } = useTranslation();
	return (
		<>
			<h4 className="title">{t("general.CVTitle")}</h4>
			<p>{t("about.AboutLong")}</p>
			<ExperienceCV />
			<Skills />
		</>
	);
};

export default PageCV;
