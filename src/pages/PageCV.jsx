import { useTranslation } from "react-i18next";

const PageCV = () => {
	const { t } = useTranslation();
	return (
		<main>
			<h4 className="title">{t("general.home")}</h4>
		</main>
	);
};

export default PageCV;
