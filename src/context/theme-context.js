// import { createTheme, ThemeProvider } from "@mui/material";
// import * as React from "react";
// import { purple, amber, deepOrange, grey } from "@mui/material/colors";

// const ThemeContext = React.createContext();

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: "#fff",
//             secondary: grey[500],
//           },
//         }),
//   },
// });
// const AppThemeProvider = ({ children }) => {
//   const [mode, setMode] = React.useState("dark");

//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

//   const colorMode = React.useMemo(
//     () => ({
//       // The dark mode switch would invoke this method
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//       },
//     }),
//     []
//   );

//   return (
//     <ThemeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>{children}</ThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// const useThemeContext = () => {
//   const context = React.useContext(ThemeContext);
//   if (context === "undefined") {
//     throw new Error("ThemeContext must be used within a ThemeProvider");
//   }
//   return context;
// };

// export { AppThemeProvider, useThemeContext };

export default "hello";
