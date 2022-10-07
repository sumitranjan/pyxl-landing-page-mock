import React from "react";
import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import PrimaryButton from "../Button/PrimaryButton";

const Developers = () => {
  interface MessageProps {
    stats: string;
    content: string;
  }
  const CardCustome = ({ stats, content }: MessageProps) => {
    return (
      <Container>
        <Grid>
          <Typography variant="h4">{stats}</Typography>
          <Typography variant="subtitle1">{content}</Typography>
        </Grid>
      </Container>
    );
  };
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{ minHeight: "80vh" }}
      >
        <Typography variant="h4">
          100 Million developers from 23 countries{" "}
        </Typography>
        <Typography variant="h4">have already joined Pyxl</Typography>;
        <Grid display="flex">
          <Grid item xs={4} md={1.5}>
            <CardCustome stats="15+" content="Job types" />
          </Grid>
          <Grid item xs={4} md={2}>
            <CardCustome stats="100+" content="Technologies" />
          </Grid>
          <Grid item xs={4} md={2}>
            <CardCustome stats="7+" content="Seniority levels" />
          </Grid>
        </Grid>
        ;
        <PrimaryButton text="START FOR FREE" />
      </Grid>
    </Container>
  );
};

export default Developers;
