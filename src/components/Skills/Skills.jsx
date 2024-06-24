import { useTranslation } from "react-i18next";
import "./Skills.scss";
import List from "../List/List";

const Skills = () => {
	const { t } = useTranslation();

	const workSkillsObject = t("workSkills", { returnObjects: true });
	const workSkillsArray = Object.values(workSkillsObject);

	const softSkillsObject = t("softSkills", { returnObjects: true });
	const softSkillsArray = Object.values(softSkillsObject);

	const languagesObject = t("languages", { returnObjects: true });
	const languagesArray = Object.values(languagesObject);

	const toolsObject = t("tools", { returnObjects: true });
	const toolsArray = Object.values(toolsObject);

	console.log(
		"workSkillsArray: ",
		workSkillsArray,
		"softSkillsArray: ",
		softSkillsArray,
		"languagesArray: ",
		languagesArray
	);
	return (
		<section className="skills">
			<List title={t("general.WorkSkillsTitle")} listArray={workSkillsArray} />

			<List title={t("general.SoftSkillsTitle")} listArray={softSkillsArray} />

			<List title={t("general.LanguagesTitle")} listArray={languagesArray} />

			<List title={t("general.ToolsTitle")} listArray={toolsArray} />
		</section>
	);
};

export default Skills;
