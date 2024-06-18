import "./Experience.scss";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";

const Experience = () => {
	const { t } = useTranslation();

	return (
		<div className="experience">
			<h2 className="title">{t("ExpTitle")}</h2>
			<ExperienceCard />
			<ExperienceCard />
			<ExperienceCard />
		</div>
	);
};

export default Experience;
