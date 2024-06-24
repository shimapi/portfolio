import { useTranslation } from "react-i18next";
import "./Experience.scss";

const ExperienceCV = () => {
	const { t } = useTranslation();

	const expObject = t("experienceCV", { returnObjects: true });
	const expArray = Object.values(expObject).reverse();

	return (
		<div className="experience-cv">
			<h2 className="title">{t("general.ExpCVTitle")}</h2>

			{expArray.map((exp, index) => (
				<article className="experience-cv__job" key={index}>
					<section className="experience-cv__timeline">
						<div className="experience-cv__timeline-line"></div>
						<div className="experience-cv__timeline-circle"></div>
					</section>

					<section className="experience-cv__jobinfo">
						<h4 className="experience-cv__jobinfo-name">{exp.title}</h4>
						<h5 className="experience-cv__jobinfo-date">
							<span className="experience-cv__jobinfo-date-span">
								{exp.bizz}
							</span>
							<span className="experience-cv__jobinfo-date-span">
								{exp.date}
							</span>
							<span className="experience-cv__jobinfo-date-span">
								{exp.place}
							</span>
						</h5>
						<ul className="experience-cv__jobinfo-description">
							{Object.values(exp.bullets).map((item, index) => (
								<li className="experience-cv__jobinfo-bullet" key={index}>
									{item}
								</li>
							))}
						</ul>
					</section>
				</article>
			))}
		</div>
	);
};

export default ExperienceCV;
