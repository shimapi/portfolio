import { useTranslation } from "react-i18next";

export const About = () => {
	const { t } = useTranslation();

	return (
		<main>
			<h4 className="title">{t("AboutTitle")}</h4>
		</main>
	);
};
