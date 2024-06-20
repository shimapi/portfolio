import { useTranslation } from "react-i18next";
import "./Projects.scss";
import { Link } from "react-router-dom";

const ProjectCard = () => {
	const { t } = useTranslation();

	const projObject = t("projects", { returnObjects: true });
	const projArray = Object.values(projObject);
	console.log(projArray);

	return (
		<div className="projects">
			{projArray.map((proj, index) => (
				<article className="project-card" key={index}>
					<div className="project-card__img">
						<img src="" alt="" />
						<h4 className="project-card__category">
							{projArray[index].category}
						</h4>
					</div>
					<h3 className="project-card__title">{projArray[index].title}</h3>
					<div className="project-card__tech">
						{Object.values(projArray[index].tech).map((tech, i) => {
							return (
								<span className="project-card__tech-unit box" key={i}>
									{tech}
								</span>
							);
						})}
					</div>
					<div className="project-card__action">
						<Link className="button button-primary">ver github</Link>
						<Link className="button button-secondary">ver proyecto</Link>
					</div>
				</article>
			))}
		</div>
	);
};

export default ProjectCard;
