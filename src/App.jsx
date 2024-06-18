import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Home } from "./pages/Home";
import { useContext } from "react";
import { ThemeContext } from "./assets/ThemeContext";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Volunteering from "./components/Volunteering/Volunteering";
import { About } from "./components/About/About";

const App = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<BrowserRouter>
			<div className={`container ${theme}`}>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/calendar" element={<About />} />
					<Route path="/volunteer" element={<Volunteering />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
