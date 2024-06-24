import { useTranslation } from "react-i18next";
import "./Education.scss";

const Education = () => {
	const { t } = useTranslation();

	const eduObject = t("education", { returnObjects: true });
	const eduArray = Object.values(eduObject).reverse();

	return (
		<div className="education">
			<h2 className="title">{t("general.EducationTitle")}</h2>

			{eduArray?.map((edu, index) => (
				<article className="education__job" key={index}>
					<section className="education__timeline">
						<div className="experience-cv__timeline-line"></div>

						<div className="experience-cv__timeline-circle"></div>
					</section>

					<section className="education__info">
						<h4 className="education__info-name">{edu.title}</h4>
						<h5 className="education__info-date">
							<span className="education__info-date-span">
								{edu.institution}
							</span>
							<span className="education__info-date-span">{edu.date}</span>
							<span className="education__info-date-span">{edu.place}</span>
						</h5>
						<ul className="education__info-description">
							{Object.values(edu.bullets).map((item, index) => (
								<li className="education__info-bullet" key={index}>
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

export default Education;
