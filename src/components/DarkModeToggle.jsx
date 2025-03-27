// import { useEffect, useState } from "react";

// const DarkModeToggle = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <button onClick={toggleTheme} className="btn btn-sm btn-outline">
//       {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
//     </button>
//   );
// };

// export default DarkModeToggle;
