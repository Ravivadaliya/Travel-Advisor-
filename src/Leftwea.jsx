import React from "react";
import Box from "@mui/material/Box";
import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
import WeatherIcons from "./images/city.jpg";
const Leftwea = ({ Locationdata }) => {
  return (
    <>
      <div style={{ padding: "25px" }}>
        <Typography variant="h4" margin={{}}>
          Weather Details
        </Typography>

        <br />
        <Card elevation={6}>
          <CardMedia
            style={{ height: "350px", height: "450px" }}
            image={WeatherIcons}
            title={"Wather"}
          />

          <CardContent>
          

            <Typography
              gutterBottom
              variant="subtitle1"
              color="textSecondary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              {Locationdata.data.name}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Leftwea;
