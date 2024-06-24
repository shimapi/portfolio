import { useTranslation } from "react-i18next";
import "./Projects.scss";
import { Link } from "react-router-dom";

const ProjectCard = () => {
	const { t } = useTranslation();

	const projObject = t("projects", { returnObjects: true });
	const projArray = Object.values(projObject);

	const imagesRoute = "/src/assets/images/";

	return (
		<div className="projects">
			{projArray?.map((proj, index) => (
				<article className="project-card" key={index}>
					{console.log(proj)}
					<div className="project-card__img">
						<img src={`${imagesRoute}${proj.img[1]}`} alt={proj.title} />
						<h4 className="project-card__category">{proj.category}</h4>
					</div>
					<h3 className="project-card__title">{proj.title}</h3>
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
								className="button button-primary"
								to={proj.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("general.ProjectGithub")}
							</Link>
						)}
						{proj.deploy && (
							<Link
								className="button button-secondary"
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
