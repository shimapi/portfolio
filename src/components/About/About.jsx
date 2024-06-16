import "./About.sass";

export const About = () => {
	return (
		<div className="about">
			<div className="about__greeting">
				<h3 className="about__greeting-hi">hi!</h3>
				<h1 className="about__greeting-im">
					I&apos;m Shirley Mallea, a web developer
				</h1>
				<h2 className="about__greeting-short">
					who loves to offer a good solution by interpreting business needs to
					create experiences that attract and persuade the end customer
				</h2>
			</div>
			<aside className="about__image">
				<img src="" alt="" />
			</aside>
		</div>
	);
};
