const ExperienceCard = () => {
	return (
		<div className="experience-card">
			<div className="experience-card__img">
				<img src="" alt="" />
				<h4 className="experience-card__category ">API REST</h4>
			</div>
			<h3 className="experience-card__title">Título con un texto más largo</h3>
			<div className="experience-card__tech">
				<span className="experience-card__tech-unit box">JS</span>
				<span className="experience-card__tech-unit box">React</span>
				<span className="experience-card__tech-unit box">SASS</span>
			</div>
			<div className="experience-card__action">
				<button className="button button-primary">ver github</button>
				<button className="button button-secondary">ver proyecto</button>
			</div>
		</div>
	);
};

export default ExperienceCard;
