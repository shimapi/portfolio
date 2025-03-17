import { useTranslation } from "react-i18next";
import "./Projects.scss";
import { Link } from "react-router-dom";

const ProjectCard = () => {
	const { t } = useTranslation();

	const projObject = t("projects", { returnObjects: true });
	const projArray = Object.values(projObject).reverse();

	const imagesRoute = "/images/";

	// Función auxiliar para obtener el ID del proyecto
	const getProjectId = (proj) => {
		return Object.keys(projObject).find(key => projObject[key] === proj);
	};

	return (
		<div className="projects">
			{projArray?.map((proj, index) => (
				<article className="project-card" key={index}>
					<Link 
						to={`/project/${getProjectId(proj)}`} 
						className="project-card__title-link"
					>
						<div className="project-card__img">
							<img src={`${imagesRoute}${proj.img[1]}`} alt={proj.title} />
							<h4 className="project-card__category">{proj.category}</h4>
						</div>
					
						<h3 className="project-card__title">
							{proj.title}
						</h3>
					</Link>
					<div className="project-card__tech">
						{Object.values(proj.tech)?.map((tech, i) => {
							return (
								<span className="project-card__tech-unit box" key={i}>
									{tech}
								</span>
							);
						})}
					</div>
					<div className="project-card__action">
						{proj.github && (
							<Link
								className={`button button-primary ${proj.github && proj.deploy && ('button-half')}`}
								to={proj.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("general.ProjectGithub")}
							</Link>
						)}
						{proj.deploy && (
							<Link
								className={`button button-secondary ${proj.github && proj.deploy && ('button-half')}`}
								to={proj.deploy}
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("general.ProjectDeploy")}
							</Link>
						)}
					</div>
				</article>
			))}
		</div>
	);
};

export default ProjectCard;
