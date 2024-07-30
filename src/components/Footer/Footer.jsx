import "./Footer.scss";
import { useTranslation } from "react-i18next";
import PathConstants from "../../routes/pathConstants";
import { Link } from "react-router-dom";
import {
	RiGithubFill,
	RiHeart3Fill,
	RiInstagramFill,
	RiLinkedinFill,
	RiMailFill,
	RiSparkling2Fill,
	RiTiktokFill,
} from "react-icons/ri";
// import bg from "../../../public/images/waves.svg";
import Button from "../Button/Button";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<footer className="footer">
			{/* 			<div className="footer__bg">
				<img src={bg} alt="footer background" />
			</div> */}
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
					<Link
						to={PathConstants.EMAIL}
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiMailFill className="footer__social-icon" />
					</Link>
				</div>

				<div className="footer__cv">
					<Button />
				</div>
				<div className="footer__copy">
					<p className="footer__bye">
						<RiSparkling2Fill />
						{"  "}
						{t("general.copy2")}
						{"  "}
						<RiHeart3Fill />
					</p>

					<p>&copy; 2024 {t("general.copy")}</p>
					<p>
						{t("general.copy3")}{" "}
						<Link
							to={PathConstants.LINKEDIN}
							target="_blank"
							rel="noopener noreferrer"
						>
							{t("general.linkedin")}
						</Link>{" "}
						{t("general.or")}{" "}
						<Link
							to={PathConstants.CALENDAR}
							target="_blank"
							rel="noopener noreferrer"
						>
							{t("general.BookTitle")}
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
