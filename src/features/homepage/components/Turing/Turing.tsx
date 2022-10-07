import { Box, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Turing = () => {
  interface MessageProps {
    heading: string;
    stats: string;
    content: string;
  }
  const CustomeCard = ({ heading, stats, content }: MessageProps) => {
    return (
      <Container>
        <Grid item >
          <Card
            sx={{
              maxWidth: 350,
              minHeight: 200,
              borderRadius: 6,
              marginTop: 10,
              bgcolor: "#422e80",
              textAlign: "left",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ marginTop: 3, marginLeft: 4, marginRight: 2 }}
            >
              {heading}
            </Typography>
            <Typography
              variant="h4"
              sx={{ marginTop: 1, marginLeft: 4, marginRight: 2 }}
            >
              {stats}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ marginTop: 1, marginLeft: 4, marginRight: 2 }}
            >
              {content}
            </Typography>
          </Card>
        </Grid>
      </Container>
    );
  };
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        textAlign="center"
        sx={{ minHeight: "90vh" }}
      >
        <Typography variant="h4">Why businesses choose Turing</Typography>
        <Grid display="flex">
          <CustomeCard
            heading="speed"
            stats="3 days"
            content="to fill most roles, sometimes same day."
          />
          <CustomeCard
            heading="Time Saved"
            stats="50+ hours"
            content="of engineering team time saved per hire on interviewing."
          />
          <CustomeCard
            heading="Retention"
            stats="97%"
            content="engagement success rate.

            "
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Turing;
