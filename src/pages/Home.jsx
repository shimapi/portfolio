//import { useTranslation } from "react-i18next";

import ExperienceCV from "../components/Experience/Experience";
import About from "../components/About/About";

export const Home = () => {
	//const { t } = useTranslation();

	return (
		<>
			<About />
			<ExperienceCV />
		</>
	);
};
