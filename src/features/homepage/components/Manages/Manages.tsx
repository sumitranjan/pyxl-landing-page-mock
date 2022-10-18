import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PrimaryButton from "../Button/PrimaryButton";

const Manages = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignContent="center"
        textAlign="center"
        sx={{ minHeight: "50vh" }}
      >
        <Typography variant="h4">Hire and manage remote designers</Typography>
        <Typography variant="subtitle1">
          Tell us the skills you need and we&rsquoll find the best designers for
          you in days, not weeks.
        </Typography>
        <Box sx={{ marginTop: 4 }}>
          <PrimaryButton text="GET STARTED" />
        </Box>
      </Grid>
    </Container>
  );
};

export default Manages;
