import {
  Card,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const Turing = () => {
  const theme = useTheme();
  interface MessageProps {
    heading: string;
    stats: string;
    content: string;
  }
  const CustomeCard = ({ heading, stats, content }: MessageProps) => {
    return (
      <Grid item sx={{ margin: "auto" }}>
        <Card
          sx={{
            maxWidth: 250,
            minHeight: 200,
            borderRadius: 6,
            marginTop: 8,
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
    );
  };
  return (
    <Container
      maxWidth="xl"
      sx={{ background: theme.colorConstants.bgGrayColor }}
    >
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        textAlign="center"
        sx={{ minHeight: "100vh" }}
        marginTop="5%"
      >
        <Typography variant="h4">Why businesses choose Turing</Typography>
        <Grid container spacing={2}>
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
            content="engagement success rates."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Turing;
