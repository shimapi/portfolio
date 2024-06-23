import "./About.scss";
import { useTranslation } from "react-i18next";
import me from "../../assets/images/shirley-mallea.png";
import BlobImage from "../BlobImage/BlobImage";

const About = () => {
	const { t } = useTranslation();

	return (
		<div className="about">
			<div className="about__greeting">
				<h3 className="about__greeting-hi"> {t("about.AboutGreeting")} </h3>
				<h1 className="about__greeting-im">
					{t("about.AboutName")} <br />
					<span className="about__greeting-accent">
						{t("general.CVTitle")}{" "}
					</span>
				</h1>
				<h2 className="about__greeting-short">{t("about.AboutShort")}</h2>
				<br />
				<br />
				<button className="button button-primary">
					{t("about.DownloadCV")}
				</button>
			</div>
			<aside className="about__image">
				<BlobImage photo={me} altPhoto={t("about.AboutName")} />
			</aside>
		</div>
	);
};

export default About;
