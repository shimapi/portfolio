import { useTranslation } from "react-i18next";
import "./Skills.scss";

const Skills = () => {
	const { t } = useTranslation();

	const skillsObject = t("skills", { returnObjects: true });
	const skillsArray = Object.values(skillsObject);

	return (
		<div className="skills">
			<h2 className="title">{t("general.SkillsTitle")}</h2>
			<ul>
				{skillsArray.map((skill, index) => (
					<li key={index} className="skills__name">
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Skills;
