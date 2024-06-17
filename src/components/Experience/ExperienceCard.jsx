const ExperienceCard = () => {
	return (
		<div className="experience-card">
			<img src="" alt="" className="experience-card__img" />
			<h3 className="experience-card__title">Título con un texto más largo</h3>
			<h4 className="experience-card__category">API REST</h4>
			<div className="experience-card__tech">
				<span className="experience-card__tech-unit box">JS</span>
				<span className="experience-card__tech-unit box">React</span>
				<span className="experience-card__tech-unit box">SASS</span>
			</div>
			<button className="button button-primary">ver github</button>
			<button className="button button-secondary">ver proyecto</button>
		</div>
	);
};

export default ExperienceCard;
