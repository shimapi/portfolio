import { useTranslation } from "react-i18next";
import "./Experience.scss";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
	const { t } = useTranslation();

	return (
		<div className="experience">
			<h2 className="title">{t("general.ProjectsTitle")}</h2>
			<ExperienceCard />
			<ExperienceCard />
			<ExperienceCard />
		</div>
	);
};

export default Experience;
