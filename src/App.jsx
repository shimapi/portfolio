import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Home } from "./pages/Home";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./assets/ThemeContext";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Volunteering from "./components/Volunteering/Volunteering";
import { About } from "./components/About/About";
import Footer from "./components/Footer/Footer";
import PageCV from "./pages/PageCV";
import Projects from "./components/Projects/Projects";
import PathConstants from "./routes/pathConstants";

const App = () => {
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<BrowserRouter>
			<Header />
			<div className={`container`}>
				<Routes>
					<Route path={PathConstants.HOME} element={<Home />} />
					<Route path={PathConstants.ABOUT} element={<About />} />
					<Route path={PathConstants.EXPERIENCE} element={<Experience />} />
					<Route path={PathConstants.SKILLS} element={<Skills />} />
					<Route path={PathConstants.CALENDAR} element={<About />} />
					<Route path={PathConstants.VOLUNTEER} element={<Volunteering />} />
					<Route path={PathConstants.CV} element={<PageCV />} />
					<Route path={PathConstants.PROJECTS} element={<Projects />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
