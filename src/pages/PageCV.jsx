import { useTranslation } from "react-i18next";
import ExperienceCV from "../components/Experience/ExperienceCV";

const PageCV = () => {
	const { t } = useTranslation();
	return (
		<>
			<h4 className="title">{t("general.CVTitle")}</h4>
			<p>{t("about.AboutLong")}</p>
			<ExperienceCV />
		</>
	);
};

export default PageCV;
