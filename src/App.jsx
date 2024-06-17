import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { useContext } from "react";
import { ThemeContext } from "./assets/ThemeContext";
import Experience from "./components/Experience/Experience";

const App = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<BrowserRouter>
			<div className={`container ${theme}`}>
				<Menu />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/" element={<About />} />
				</Routes>
				<Header />
				<About />
				<Experience />
			</div>
		</BrowserRouter>
	);
};

export default App;
