import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import { Home } from "./pages/Home";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./assets/ThemeContext";
import Skills from "./components/Skills/Skills";
import Volunteering from "./components/Volunteering/Volunteering";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import PageCV from "./pages/PageCV";
import Agenda from "./pages/Agenda";

import Projects from "./components/Projects/Projects";
import PathConstants from "./routes/pathConstants";
import ProjectPage from "./components/Projects/ProjectPage";

// Componente para controlar el scroll
function ScrollToTop() {
	const { pathname } = useLocation();
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	
	return null;
}

const App = () => {
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Header />
			<main className={`container main__container`}>
				<Routes>
					<Route path={PathConstants.HOME} element={<Home />} />
					<Route path={PathConstants.ABOUT} element={<About />} />
					<Route path={PathConstants.SKILLS} element={<Skills />} />
					<Route path={PathConstants.CALENDAR} element={<Agenda />} />
					<Route path={PathConstants.VOLUNTEER} element={<Volunteering />} />
					<Route path={PathConstants.CV} element={<PageCV />} />
					<Route path={PathConstants.PROJECTS} element={<Projects />} />
					<Route path={PathConstants.PROJECTS_ID} element={<ProjectPage />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
