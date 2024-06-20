import "./Projects.scss";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const Projects = () => {
	const { t } = useTranslation();

	return (
		<div className="projects">
			<h2 className="title">{t("general.ProjectsTitle")}</h2>
			<ProjectCard />
		</div>
	);
};

export default Projects;
