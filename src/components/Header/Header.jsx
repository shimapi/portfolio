import "./Header.scss";
import Settings from "../Settings/Settings";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiCloseLargeFill, RiMenu4Fill } from "react-icons/ri";
// import { Menu } from "../Menu/Menu";
import { RiCodeFill, RiUserSmileFill } from "react-icons/ri";
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

	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
	const [showMenu, setShowMenu] = useState("closed");
	const [menuType, setMenuType] = useState("mobile");

	const isActive = ({ isActive }) => `link ${isActive ? "menu-active" : ""}`;

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth > 768);
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
		console.log(showMenu);
	};

	const handleHideMenu = () => {
		setShowMenu("closed");
	};

	return (
		<header className="header">
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
					className={`header__menu-link ${isActive}`}
					to={PathConstants.ABOUT}
					onClick={handleHideMenu}
				>
					<RiUserSmileFill size={20} /> {t("general.AboutTitle")}
				</NavLink>
				<NavLink
					className={`header__menu-link  ${isActive}`}
					to={PathConstants.PROJECTS}
					onClick={handleHideMenu}
				>
					<RiCodeFill /> {t("general.ProjectsTitle")}
				</NavLink>
				<NavLink
					className={`header__menu-link  ${isActive}`}
					to={PathConstants.SKILLS}
					onClick={handleHideMenu}
				>
					<RiUserSmileFill size={20} /> {t("general.SkillsTitle")}
				</NavLink>
				<NavLink
					className={`header__menu-link  ${isActive}`}
					to={PathConstants.CALENDAR}
					onClick={handleHideMenu}
				>
					<RiUserSmileFill size={20} /> {t("general.BookTitle")}
				</NavLink>
				<NavLink
					className={`header__menu-link  ${isActive}`}
					to={PathConstants.VOLUNTEER}
					onClick={handleHideMenu}
				>
					<RiUserSmileFill size={20} /> {t("general.VolTitle")}
				</NavLink>
				<NavLink
					className={`header__menu-link  ${isActive}`}
					to={PathConstants.CV}
					onClick={handleHideMenu}
				>
					<RiUserSmileFill size={20} /> {t("general.PageCVTitle")}
				</NavLink>
			</nav>
		</header>
	);
};

export default Header;
