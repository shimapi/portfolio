export const getCurrentHost =
import.meta.env.MODE === "development"
  ? "http://localhost:5173"
  : import.meta.env.MODE === "production"
    ? "https://portfolio-shirleymallea.vercel.app/"
    : "https://www.shirleymallea.com/";