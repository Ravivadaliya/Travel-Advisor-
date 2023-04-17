import React from "react";
import Rightwea from "./Rightwea";
import Leftwea from "./Leftwea";
// import { getplacedata } from "./api";
import { useEffect } from "react";
import { useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import "./style.css";
import background from "./images/background.jpg";
import axios from "axios";

const App = () => {

  const [Locationdata, setLocationdata] = useState([]);
 
   

  const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Rajkot&appid=24858e629265857b0e77858c4a066109';

  useEffect(() => {
     const data =   axios.get(URL);
     data.then((dat)=>{
      setLocationdata(dat);
     })
  }, []);

  return (
    <>
      <CssBaseline />

      <Grid container spacing={4} style={{ width: "100%" }}>
        <Grid item xs={12} md={6}>
          <Rightwea  />
        </Grid>
        <Grid item xs={12} md={5}>
          <Leftwea  
           Locationdata={Locationdata}
            
           />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
