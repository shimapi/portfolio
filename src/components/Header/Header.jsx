import "./Header.scss";
import Settings from "../Settings/Settings";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	RiCalendarCheckFill,
	RiCloseLargeFill,
	RiDownloadCloud2Fill,
	RiMenu4Fill,
	//RiUser5Fill,
	RiCodeFill,
} from "react-icons/ri";
import { HiUsers } from "react-icons/hi2";
//import { GiBrain } from "react-icons/gi";

import PathConstants from "../../routes/pathConstants";

const Header = () => {
	const { t } = useTranslation();
	const [showLastName, setShowLastName] = useState(window.innerWidth > 375);

	useEffect(() => {
		const handleResize = () => {
			setShowLastName(window.innerWidth > 375);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);
	const [showMenu, setShowMenu] = useState("closed");
	const [menuType, setMenuType] = useState("mobile");

	const isActive = ({ isActive }) => `link ${isActive ? "menu-active" : ""}`;

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth > 900);
			setShowMenu("closed");
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isDesktop]);

	useEffect(() => {
		setMenuType(isDesktop ? "navbar__desktop" : "navbar__mobile");
	}, [isDesktop]);

	const handleShowMenu = () => {
		setShowMenu(showMenu === "open" ? "closed" : "open");
	};

	const handleHideMenu = () => {
		setShowMenu("closed");
	};

	return (
		<header className="header">
			<div className="header__container">
				<nav className={`navbar ${menuType}`}>
					<div className="navbar__talent">
						<NavLink to="/">
							<span className="navbar__talent-symbol">
								{t("general.CVName0")}
							</span>
							<span className="navbar__talent-name">{t("general.CVName")}</span>
							{showLastName && (
								<span className="navbar__talent-name">
									{t("general.CVLastname")}
								</span>
							)}
							<span className="navbar__talent-symbol">
								{" "}
								{t("general.CVName2")}
							</span>
						</NavLink>
					</div>
					<div className="navbar__icons">
						<Settings />
						<div className="navbar__hamburger">
							{showMenu === "open" ? (
								<RiCloseLargeFill onClick={handleShowMenu} />
							) : (
								<RiMenu4Fill onClick={handleShowMenu} />
							)}
						</div>
					</div>
				</nav>

				<nav className={`header__menu navbar__${showMenu}`}>
					<NavLink
						className={`header__menu-link  ${isActive}`}
						to={PathConstants.CV}
						onClick={handleHideMenu}
					>
						<RiDownloadCloud2Fill size={20} />
						<span className="header__menu-name">
							{t("general.PageCVTitle")}
						</span>
					</NavLink>
					{/* 					<NavLink
						className={`header__menu-link ${isActive}`}
						to={PathConstants.ABOUT}
						onClick={handleHideMenu}
					>
						<RiUser5Fill size={20} />{" "}
						<span className="header__menu-name">{t("general.AboutTitle")}</span>
					</NavLink> */}
					<NavLink
						className={`header__menu-link  ${isActive}`}
						to={PathConstants.PROJECTS}
						onClick={handleHideMenu}
					>
						<RiCodeFill />{" "}
						<span className="header__menu-name">
							{t("general.ProjectsTitle")}
						</span>
					</NavLink>
					{/* <NavLink
					className={`header__menu-link  ${isActive}`}
					to={PathConstants.SKILLS}
					onClick={handleHideMenu}
					>
					<GiBrain size={20} />{" "}
					<span className="header__menu-name">{t("general.SkillsTitle")}</span>
					</NavLink> */}
					<NavLink
						className={`header__menu-link  ${isActive}`}
						to={PathConstants.CALENDAR}
						onClick={handleHideMenu}
					>
						<RiCalendarCheckFill size={20} />{" "}
						<span className="header__menu-name">{t("general.BookTitle")}</span>
					</NavLink>
					<NavLink
						className={`header__menu-link  ${isActive}`}
						to={PathConstants.VOLUNTEER}
						onClick={handleHideMenu}
					>
						<HiUsers size={20} />{" "}
						<span className="header__menu-name">{t("general.VolTitle")}</span>
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Header;
