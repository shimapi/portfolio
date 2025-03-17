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
			<h2>{project.title}</h2>
			
			<article className="project-page__content">
				<section className="project-page__timeline">
					<div className="project-page__timeline-line"></div>
					<div className="project-page__timeline-circle"></div>
				</section>

				<section className="project-page__info">
					<h4 className="project-page__info-category">{project.category}</h4>
					<h5 className="project-page__info-metadata">
						<span className="project-page__info-metadata-span">
							{project.client}
						</span>
						<span className="project-page__info-metadata-span">
							{project.date}
						</span>
					</h5>



					<ul className="project-page__info-description">
						{Object.values(project.bullets).map((bullet, i) => (
							<li key={i} className="project-page__info-bullet">{bullet}</li>
						))}
					</ul>

					<div className="project-page__info-tech">
						{Object.values(project.tech).map((tech, i) => (
							<span key={i} className="project-card__tech-unit box">{tech}</span>
						))}
					</div>
					
				</section>
			</article>

			<section className="project-page__gallery">
				<h3 className="subtitle">{t("general.gallery")}</h3>
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
			</section>
		</div>
	);
};

export default ProjectPage;
