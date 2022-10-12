import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import PrimaryButton from "../Button/PrimaryButton";

const Designers = () => {
  interface MessageProps {
    text: string;
  }
  const ListContainer = ({ text }: MessageProps) => {
    return (
      <ListItem
        sx={{
          display: "list-item",
        }}
      >
        <ListItemText primary={text} />
      </ListItem>
    );
  };
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{ minHeight: "90vh" }}
      >
        <Typography variant="h4">Why are the best designers joining</Typography>
        <Typography variant="h4">Pyxl? Because they want careers,</Typography>
        <Typography variant="h4">not gigs.</Typography>
        <List
          sx={{
            listStyleType: "disc",
            paddingLeft: 3,
            color: "white",
          }}
        >
          <ListContainer text="Vetted once, eligible for life" />
          <ListContainer text="Exclusive Pyxl developer community" />
          <ListContainer text="Income stability thanks to 99% rematch rate" />
        </List>

        <PrimaryButton text="GET A DEMO" />
      </Grid>
    </Container>
  );
};

export default Designers;
