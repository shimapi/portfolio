import { useTranslation } from "react-i18next";
import ExperienceCV from "../components/Experience/ExperienceCV";

export const Home = () => {
	const { t } = useTranslation();

	return (
		<main>
			<ExperienceCV />
		</main>
	);
};
