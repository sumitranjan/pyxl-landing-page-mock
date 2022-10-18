import React from "react";
import { Container, Grid, Typography, useTheme } from "@mui/material";
import PrimaryButton from "../Button/PrimaryButton";

const Remote = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{ background: theme.colorConstants.bgGrayColor }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
        ml={5}
      >
        <Typography variant="h4">Remote is challenging</Typography>;
        <Typography variant="subtitle1">
          Building an extensive global pipeline to find great people
        </Typography>
        ;
        <Typography variant="subtitle1">
          Vetting remote candidates without taking up all of the designers time
        </Typography>
        ;
        <Typography variant="subtitle1">
          Making remote development easy, compliant, and secure
        </Typography>
        ;
        <PrimaryButton text="GET A DEMO" />
      </Grid>
    </Container>
  );
};

export default Remote;
