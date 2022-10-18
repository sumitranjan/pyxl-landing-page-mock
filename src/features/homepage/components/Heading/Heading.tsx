import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import headingImage from "../../../../assets/placeholder_image_headline.jpg";
import PrimaryButton from "../Button/PrimaryButton";

const Heading = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: theme.colorConstants.bgColor }}>
      <Container maxWidth={"lg"}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid container direction="column" sx={{ gap: "10px", width: 400 }}>
            <Typography variant="h4">
              Build your team in days not months
            </Typography>
            <Typography variant="subtitle1">
              Our AI-backed Intelligent Talent Cloud helps you source, vet,
              match, and manage the world&rsquos best non-tech talent remotely.
            </Typography>
            <PrimaryButton text="GET STARTED" />
          </Grid>

          <Box
            component="img"
            sx={{
              width: {
                xs: "100%",
                sm: 350,
                md: 350,
                lg: 350,
              },
            }}
            alt="Text placeholder"
            src={headingImage}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default Heading;
