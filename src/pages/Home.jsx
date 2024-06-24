//import { useTranslation } from "react-i18next";

import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

export const Home = () => {
	//const { t } = useTranslation();

	return (
		<>
			<About />
			<Projects />
		</>
	);
};
