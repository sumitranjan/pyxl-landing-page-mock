import React from "react";
import headingImage from "../../../../assets/placeholder_image_headline.jpeg";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  ListItemButton,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";
import PrimaryButton from "../Button/PrimaryButton";

const RemoteDevelopers = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        alignContent="center"
        textAlign="center"
        sx={{ minHeight: "100vh" }}
      >
        <Container
          sx={{
            marginBottom: 10,
          }}
        >
          <Typography variant="h4" align="center">
            Pyxl combines planetary reach and AI to
          </Typography>
          <Typography variant="h4" align="center">
            deliver your ideal remote developers
          </Typography>
        </Container>
        <Container>
          <Grid
            container
            columnSpacing={5}
            alignContent="center"
            justifyContent="center"
          >
            {/* Left Card */}
            <Grid item xs={8} md={3.5}>
              <Card
                sx={{
                  maxWidth: 400,
                  backgroundColor: "#2f2f30",
                  borderRadius: 6,
                  marginTop: 10,
                  minHeight: 320,
                }}
              >
                ;
                <Avatar
                  sx={{ width: 80, height: 80, margin: "auto" }}
                  variant="square"
                  src={headingImage}
                  alt="Design"
                />
                <CardContent>
                  <Typography variant="h6">
                    Tailored to your requirements
                  </Typography>
                  <List
                    sx={{
                      listStyleType: "disc",
                      paddingLeft: 3,
                    }}
                  >
                    <ListItem
                      sx={{
                        display: "list-item",
                        clolor: "white",
                        paddingTop: 0,
                      }}
                    >
                      <ListItemText primary="Role" sx={{ margin: 0 }} />
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "list-item",
                        clolor: "white",
                        paddingTop: 0,
                      }}
                    >
                      <ListItemText primary="Tech Stack" />
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "list-item",
                        clolor: "white",
                        paddingTop: 0,
                      }}
                    >
                      <ListItemText primary="Seniority Level" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            {/* Center Card */}
            <Grid item xs={8} md={4}>
              <Card
                sx={{
                  maxWidth: 400,
                  backgroundColor: "#422e80",
                  borderRadius: 6,
                }}
              >
                ;
                <Avatar
                  sx={{ width: 80, height: 80, margin: "auto" }}
                  variant="square"
                  src={headingImage}
                  alt="Design"
                />
                <CardContent>
                  <Typography variant="h6">
                    Our Intelligent Talent Cloud Platform Leverages
                  </Typography>
                  <List
                    sx={{
                      listStyleType: "disc",
                      paddingLeft: 3,
                    }}
                  >
                    <ListItem
                      sx={{
                        display: "list-item",
                        clolor: "white",
                        paddingTop: 0,
                      }}
                    >
                      <ListItemText
                        primary="Global Sourcing"
                        sx={{ margin: 0 }}
                      />
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "list-item",
                        clolor: "white",
                        paddingTop: 0,
                      }}
                    >
                      <ListItemText primary="Intelligent Vetting" />
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "list-item",
                        clolor: "white",
                        paddingTop: 0,
                      }}
                    >
                      <ListItemText primary="Extensive Matching" />
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "list-item",
                        clolor: "white",
                        paddingTop: 0,
                      }}
                    >
                      <ListItemText primary="HR / Payments Compliance" />
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "list-item",
                        clolor: "white",
                        paddingTop: 0,
                      }}
                    >
                      <ListItemText primary="Automated On-The-Job Quality Control" />
                    </ListItem>
                  </List>
                  <PrimaryButton text="TALK TO AN EXPERT" />
                </CardContent>
              </Card>
            </Grid>

            {/* Right Card */}

            <Grid
              item
              xs={8}
              md={3.5}
              // sx={{ height: 500, border: "4px solid red" }}
            >
              <Card
                sx={{
                  maxWidth: 400,
                  backgroundColor: "#2f2f30",
                  borderRadius: 6,
                  marginTop: 10,
                  minHeight: 320,
                }}
              >
                ;
                <Avatar
                  sx={{ width: 80, height: 80, margin: "auto" }}
                  variant="square"
                  src={headingImage}
                  alt="Design"
                />
                <CardContent>
                  <Typography variant="h6">Your ideal designer</Typography>
                  <List
                    sx={{
                      listStyleType: "disc",
                      paddingLeft: 3,
                    }}
                  >
                    <ListItem
                      sx={{
                        display: "list-item",
                        clolor: "white",
                        paddingTop: 0,
                      }}
                    >
                      <ListItemText primary="Typical engagement: Full-time" />
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "list-item",
                        clolor: "white",
                        paddingTop: 0,
                      }}
                    >
                      <ListItemText primary="Time zone overlap: 4 hours" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
};

export default RemoteDevelopers;
