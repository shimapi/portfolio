import { useTranslation } from "react-i18next";
import ExperienceCV from "../components/Experience/ExperienceCV";

export const Home = () => {
	const { t } = useTranslation();

	return (
		<main>
			<h4 className="title">{t("general.home")}</h4>
			<ExperienceCV />
		</main>
	);
};
