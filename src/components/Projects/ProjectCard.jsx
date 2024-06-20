const ProjectCard = () => {
	return (
		<div className="project-card">
			<div className="project-card__img">
				<img src="" alt="" />
				<h4 className="project-card__category ">API REST</h4>
			</div>
			<h3 className="project-card__title">Título con un texto más largo</h3>
			<div className="project-card__tech">
				<span className="project-card__tech-unit box">JS</span>
				<span className="project-card__tech-unit box">React</span>
				<span className="project-card__tech-unit box">SASS</span>
			</div>
			<div className="project-card__action">
				<button className="button button-primary">ver github</button>
				<button className="button button-secondary">ver proyecto</button>
			</div>
		</div>
	);
};

export default ProjectCard;
