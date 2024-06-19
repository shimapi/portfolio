import { useTranslation } from "react-i18next";
import "./Experience.scss";

const ExperienceCV = () => {
	const { t } = useTranslation();

	const expObject = t("experienceCV", { returnObjects: true });
	const expArray = Object.values(expObject);

	return (
		<div className="experience-cv">
			<h2 className="title">{t("general.ExpCVTitle")}</h2>

			{expArray.map((exp, index) => (
				<article className="experience-cv__job" key={index}>
					<section className="experience-cv__timeline">
						<div className="experience-cv__line"></div>
						<div className="experience-cv__circle"></div>
					</section>
					<section className="experience-cv__jobinfo">
						<h4 className="experience-cv__job-name">{expArray[index].title}</h4>
						<h5 className="experience-cv__job-date">
							{expArray[index].date} - {expArray[0].place}
						</h5>
						<ul className="experience-cv__job-description">
							<li className="experience-cv__job-bullet">
								{expArray[index].bullets[1]}
							</li>
							<li className="experience-cv__job-bullet">
								{expArray[index].bullets[2]}
							</li>
							{expArray[index].bullets[3] !== undefined ? (
								<li className="experience-cv__job-bullet">
									{expArray[index].bullets[3]}
								</li>
							) : null}
						</ul>
					</section>
				</article>
			))}
		</div>
	);
};

export default ExperienceCV;
