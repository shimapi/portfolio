import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

const App = () => {
	return (
		<BrowserRouter>
			<Menu />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/" element={<About />} />
			</Routes>
			<div className="container dark">
				<Header />
				<About />
			</div>
		</BrowserRouter>
	);
};

export default App;
