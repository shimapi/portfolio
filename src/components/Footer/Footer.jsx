import "./Footer.scss";
import { useTranslation } from "react-i18next";
import PathConstants from "../../routes/pathConstants";
import { Link } from "react-router-dom";
import {
	RiGithubFill,
	RiInstagramFill,
	RiLinkedinFill,
	RiTiktokFill,
} from "react-icons/ri";
import bg from "../../assets/images/waves.svg";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="footer">
			<div className="footer__bg">
				<img src={bg} alt="footer background" />
			</div>
			<div className="footer__container">
				<div className="footer__social">
					<Link
						to={PathConstants.GITHUB}
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiGithubFill className="footer__social-icon" />
					</Link>

					<Link
						to={PathConstants.LINKEDIN}
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiLinkedinFill className="footer__social-icon" />
					</Link>
					<Link
						to={PathConstants.INSTAGRAM}
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiInstagramFill className="footer__social-icon" />
					</Link>
					<Link
						to={PathConstants.TIKTOK}
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiTiktokFill className="footer__social-icon" />
					</Link>
				</div>
				<div className="footer__cv">
					<Link to={PathConstants.ABOUT} className="button button-primary">
						{t("about.DownloadCV")}
					</Link>
				</div>
				<div className="footer__copy">
					<p>&copy; 2024 {t("general.copy")}</p>
					<p>{t("general.copy2")}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
