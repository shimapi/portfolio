import { RiMenu4Fill } from "react-icons/ri";
import { Menu } from "../Menu/Menu";
import "./Header.scss";
import Settings from "../Settings/Settings";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

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

	return (
		<>
			<nav className="navbar">
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
						<RiMenu4Fill />
					</div>
				</div>
			</nav>
			<Menu />
		</>
	);
};

export default Header;
