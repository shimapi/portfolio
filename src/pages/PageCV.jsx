import { useTranslation } from "react-i18next";
import ExperienceCV from "../components/Experience/Experience";

const PageCV = () => {
	const { t } = useTranslation();
	return (
		<main>
			<h4 className="title">{t("general.CVTitle")}</h4>
			<p>{t("about.AboutLong")}</p>
			<ExperienceCV />
		</main>
	);
};

export default PageCV;
