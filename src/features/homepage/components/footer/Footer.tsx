import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import pyxlLogo from "../../../../assets/pyxl_logo_seagreen.png";
import React from "react";

type FooterProps = {
  title: string;
  data: string[];
};

const FooterList: React.FC<FooterProps> = ({ title, data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ marginBottom: 1, marginTop: 1 }} variant="h6">
        {title}
      </Typography>
      {data.map((item, index) => (
        <Typography key={index}>{item}</Typography>
      ))}
    </Box>
  );
};

const FooterLinks = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 10, marginBottom: 10 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        columns={{ xs: 3, md: 12 }}
        sx={{ margin: "auto" }}
      >
        <Grid item xs={2} md={2}>
          <Box
            component="img"
            alt="The logo of the company"
            src={pyxlLogo}
            sx={{ height: 30 }}
          />
        </Grid>
        <Grid item xs={2} md={2.5}></Grid>
        <Grid item xs={2} md={2.5}>
          <FooterList
            title="COMPANY"
            data={["How it works", "Pricing", "Docs"]}
          />
        </Grid>
        <Grid item xs={2} md={2.5}>
          <FooterList
            title="RESOURCES"
            data={[
              "Blog post name list goes here",
              "Blog post name list goes here",
              "Blog post name list goes here",
              "See all resources",
            ]}
          />
        </Grid>
        <Grid item xs={2} sm={2.5} md={2.5}>
          <FooterList
            title="ABOUT"
            data={["Terms & Conditions", "Privacy policy"]}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const Copyright = () => {
  return (
    <Container maxWidth="lg" sx={{ marginBottom: 4 }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>Copyright © 2022 Pyxl</Typography>
      </Grid>
    </Container>
  );
};

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      mt={5}
      sx={{
        background: theme.colorConstants.bgGrayColor,
        border: ".5px solid",
      }}
    >
      <FooterLinks />
      <hr />
      <Copyright />
    </Box>
  );
};

export default Footer;
