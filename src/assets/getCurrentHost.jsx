export const getCurrentHost =
	import.meta.env.VITE_MODE === "development"
		? "http://localhost:5173"
		: import.meta.env.VITE_MODE === "production"
		? "https://portfolio-shirleymallea.vercel.app/"
		: "https://www.shirleymallea.com/";
