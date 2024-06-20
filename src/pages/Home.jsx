import { useTranslation } from "react-i18next";
import ExperienceCV from "../components/Experience/Experience";

export const Home = () => {
	const { t } = useTranslation();

	return (
		<main>
			<h4 className="title">{t("general.home")}</h4>
			<ExperienceCV />
		</main>
	);
};
