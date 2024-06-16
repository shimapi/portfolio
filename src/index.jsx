import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.scss";
import "./i18n";
import { ThemeProvider } from "./assets/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
);
