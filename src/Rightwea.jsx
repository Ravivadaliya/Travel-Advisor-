import React from "react";
// import "./Rightstyle.css";
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
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const Rightwea = () => {
  return (
    <>
      <div style={{ padding: "25px" }}>
        <Typography variant="h4" margin={{}}>
          Restaurants,Hotels, & Attraction Around You
        </Typography>

        <br />
        <Card elevation={6}>
          <CardMedia
            style={{ height: "350px", height: "450px" }}
            image={WeatherIcons}
            title={"Wather"}
          />
        </Card>
      </div>
    </>
  );
};

export default Rightwea;
