import React from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

const Benefits = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        alignContent="center"
        justifyContent="center"
        sx={{ minHeight: "90vh" }}
      >
        <Typography variant="h4" align="center">
          We now live in a remote-first world
        </Typography>
        <Typography variant="h5" align="center" sx={{ marginTop: 2 }}>
          Companies are in competition to garner the
        </Typography>
        <Typography variant="h5" align="center">
          benefits of remote design talent
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
       
          maxWidth='md'
          marginTop={10}
          gap={10}
        >
          <Grid display="flex">
            <Card sx={{ display: "flex", marginRight: "12px" }}>
              <PublicIcon fontSize="large" />
            </Card>
            <Typography
              variant="subtitle2"
              align="center"
              sx={{ margin: "auto" }}
            >
              Planetary pool of designers
            </Typography>
          </Grid>
          <Grid display="flex">
            <Card sx={{ display: "flex", marginRight: "12px" }}>
              <PublicIcon fontSize="large" />
            </Card>
            <Typography
              variant="subtitle2"
              align="center"
              sx={{ margin: "auto" }}
            >
              Planetary pool of designers
            </Typography>
          </Grid>
          <Grid display="flex">
            <Card sx={{ display: "flex", marginRight: "12px" }}>
              <PublicIcon fontSize="large" />
            </Card>
            <Typography
              variant="subtitle2"
              align="center"
              sx={{ margin: "auto" }}
            >
              Planetary pool of designers
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Benefits;
