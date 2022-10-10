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
  Box,
} from "@mui/material";
import PrimaryButton from "../Button/PrimaryButton";

const RemoteDevelopers = () => {
  interface MessageProps {
    title: string;
    data: string[];
  }
  const CardCustome = ({ title, data }: MessageProps) => {
    return (
      <Box >
        <Grid item xs={12} md={11} >
          <Card
            sx={{
              maxWidth: 400,
              backgroundColor: "#2f2f30",
              borderRadius: 6,
              marginTop: 5,
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
              <Typography variant="h6">{title}</Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  paddingLeft: 3,
                  color: "white",
                }}
              >
                {data.map((item) => (
                  <ListItem
                    sx={{
                      display: "list-item",
                      clolor: "white",
                      paddingTop: 0,
                    }}
                  >
                    <ListItemText primary={item} sx={{ margin: 0 }} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    );
  };

  const CenterCard = ({ title, data }: MessageProps) => {
    return (
      <Box>
        <Grid item xs={12} md={10} sx={{ marginTop: "25px" }} >
          <Card
            sx={{
              maxWidth: 500,
              backgroundColor: "#422e80",
              borderRadius: 6,
              marginTop: 10,
              minHeight: 320,
              margin: "auto",
             
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
              <Typography variant="h6">{title}</Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  paddingLeft: 3,
                  color: "white",
                }}
              >
                {data.map((item) => (
                  <ListItem
                    sx={{
                      display: "list-item",
                      clolor: "white",
                      paddingTop: 0,
                    }}
                  >
                    <ListItemText primary={item} sx={{ margin: 0 }} />
                  </ListItem>
                ))}
                <PrimaryButton text="TALK TO AN EXPERT" />
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    );
  };
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
            columnSpacing={3}
            alignContent="center"
            justifyContent="center"
            
          >
            <CardCustome
              title="Tailored to your requirements"
              data={["Role", "Tech Stack", "Seniority Level"]}
            />
            <CenterCard
              title="Our Intelligent Talent Cloud Platform Leverages"
              data={[
                "Global Sourcing",
                "Intelligent Vetting",
                "Extensive Matching",
                "HR / Payments Compliance",
                "Automated On-The-Job Quality Control",
              ]}
            />
            <CardCustome
              title="Your ideal designer"
              data={[
                "Typical engagement: Full-time",
                "Time zone overlap: 4 hours",
              ]}
            />

            {/* Center Card */}
            {/* <Grid item xs={8} md={4}>
              <Card
                sx={{
                  maxWidth: 400,
                  backgroundColor: "#422e80",
                  borderRadius: 6,
                  color: "white",
                }}
              >
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
            </Grid> */}
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
};

export default RemoteDevelopers;
