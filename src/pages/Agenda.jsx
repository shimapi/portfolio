import { useTranslation } from "react-i18next";

const Agenda = () => {
	const { t } = useTranslation();

	return (
		<>
			<h4 className="title">{t("general.BookTitle")}</h4>

			<iframe
				src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0aYQCv6uAUWx8OpewwcP5HJjI5l2i1NgI33jBvfA4zW4nhLAvqT4VGG-_jG7m29jLKiG-bllG1?gv=true"
				width="100%"
				height="800"
			></iframe>
		</>
	);
};

export default Agenda;
