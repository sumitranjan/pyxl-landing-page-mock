import React from "react";
import { Box, AppBar, Toolbar, Container, useTheme, Grid } from "@mui/material";
import logo from "../../../../assets/pyxl_logo_seagreen.png";
import PrimaryButton from "../Button/PrimaryButton";

function Navbar() {
  const theme = useTheme();
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: theme.colorConstants.bgColor }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignContent="center"
            >
              <Box
                component="img"
                alt="Company Logo"
                src={logo}
                sx={{ height: 30 }}
              />
              <PrimaryButton text="GET STARTED" />
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
