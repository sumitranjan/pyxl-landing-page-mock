import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import PrimaryButton from "../Button/PrimaryButton";

const Designers = () => {
  const theme = useTheme();
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
    <Container
      maxWidth="xl"
      sx={{
        background: theme.colorConstants.bgGrayColor,
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        sx={{ minHeight: "90vh" }}
      >
        <Box marginLeft={5}>
          <Typography variant="h4">
            Why are the best designers joining
          </Typography>
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
        </Box>
      </Grid>
    </Container>
  );
};

export default Designers;
