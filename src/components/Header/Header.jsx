import "./Header.scss";

const Header = () => {
	return (
		<navbar className="nav">
			<ul>
				<li className="nav__element">Home</li>
				<li className="nav__element">About Me</li>
				<li className="nav__element">Projects</li>
				<li className="nav__element">Experience</li>
				<li className="nav__element">Skills</li>
				<li className="nav__element">Education</li>
				<li className="nav__element">Contact</li>
			</ul>
		</navbar>
	);
};

export default Header;
