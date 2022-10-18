import React from "react";
import Homepage from "./features/homepage/Homepage";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Homepage />
      </ThemeProvider>
    </div>
  );
}

export default App;
