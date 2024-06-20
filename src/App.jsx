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
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/calendar" element={<About />} />
					<Route path="/volunteer" element={<Volunteering />} />
					<Route path="/cv" element={<PageCV />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
