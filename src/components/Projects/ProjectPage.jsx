import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectPage = () => {
	const { id } = useParams();
	const { t } = useTranslation();
	
	const projObject = t("projects", { returnObjects: true });
	const project = projObject[id];
	const imagesRoute = "/images/";

	if (!project) {
		return <div>{t("general.project404")}</div>;
	}

	return (
		<div className="project-page">
			<h1>{project.title}</h1>
			<h3>{project.category}</h3>
			<div className="project-page__client">
				<strong>{t("general.client")}: </strong> {project.client}
			</div>
			<div className="project-page__date">
				<strong>{t("general.date")}: </strong> {project.date}
			</div>
			<div className="project-page__tech">
				<strong>{t("general.tech")}: </strong>
				{Object.values(project.tech).map((tech, i) => (
					<span key={i} className="tech-tag">{tech}</span>
				))}
			</div>
			<div className="project-page__details">
				<strong>{t("general.details")}: </strong>
				<ul>
					{Object.values(project.bullets).map((bullet, i) => (
						<li key={i}>{bullet}</li>
					))}
				</ul>
			</div>
			
			<div className="project-page__gallery">
				<h3>{t("general.gallery")}</h3>
				<div className="gallery-grid">
					{Object.values(project.img).map((img, i) => (
						<div key={i} className="gallery-item">
							<img 
								src={`${imagesRoute}${img}`} 
								alt={`${project.title} - Image ${i + 1}`}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectPage;
