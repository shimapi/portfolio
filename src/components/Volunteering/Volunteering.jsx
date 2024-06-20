import "./Volunteering.scss";
import { useTranslation } from "react-i18next";

const Volunteering = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h4 className="title"> {t("VolTitle")} </h4>
		</div>
	);
};

export default Volunteering;
