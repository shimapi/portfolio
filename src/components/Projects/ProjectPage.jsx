import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectPage = () => {
	const { id } = useParams();
	const { t } = useTranslation();
	
	const projObject = t("projects", { returnObjects: true });
	const project = projObject[id];

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<div className="project-page">
			<h1>{project.title}</h1>
			<h3>{project.category}</h3>
			<div className="project-page__client">
				<strong>Client:</strong> {project.client}
			</div>
			<div className="project-page__date">
				<strong>Date:</strong> {project.date}
			</div>
			<div className="project-page__tech">
				<strong>Technologies:</strong>
				{Object.values(project.tech).map((tech, i) => (
					<span key={i} className="tech-tag">{tech}</span>
				))}
			</div>
			<div className="project-page__details">
				<strong>Details:</strong>
				<ul>
					{Object.values(project.bullets).map((bullet, i) => (
						<li key={i}>{bullet}</li>
					))}
				</ul>
			</div>
			{/* Add images gallery here if needed */}
		</div>
	);
};

export default ProjectPage;
