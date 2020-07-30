import React from "react";
import AppBar from "./components/AppBar";
import ProjectList from "./components/ProjectList";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#69696a",
      main: "#28282a",
      dark: "#1e1e1f",
    },
    secondary: {
      light: "#fff5f8",
      main: "#ff3366",
      dark: "#e62958",
    },
  },
  typography: {
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProjectList theme={theme} />
    </ThemeProvider>
  );
}

export default App;
