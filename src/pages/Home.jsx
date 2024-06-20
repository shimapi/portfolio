import { useTranslation } from "react-i18next";
<<<<<<< HEAD
import ExperienceCV from "../components/Experience/Experience";
=======
import ExperienceCV from "../components/Experience/ExperienceCV";
>>>>>>> 2fb1b85257c940844ec8e64ae9a185ca48d7f589

export const Home = () => {
	const { t } = useTranslation();

	return (
		<main>
			<h4 className="title">{t("general.home")}</h4>
			<ExperienceCV />
		</main>
	);
};
