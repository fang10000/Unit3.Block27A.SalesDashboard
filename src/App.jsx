import { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Scroll from "./Scroll";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Box>
      <header>
        <h1 style={{ textAlign: 'left' }}>DASHBOARD</h1>
        <h2 style={{ textAlign: 'left' }}>Welcome to your dashboard</h2>
      </header>
      <Sidebar />
      <Card className="card-container">
        <CardContent className="smallCard">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            icon_1
          </Typography>
          <Typography variant="h5" component="div">
            431,225
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Sales Obtained  +21%
          </Typography>
        </CardContent>

        <CardContent className="smallCard">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            icon_2
          </Typography>
          <Typography variant="h5" component="div">
            32,441
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            New Clients  +5%
          </Typography>
        </CardContent>

        <CardContent className="smallCard">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            icon_3
          </Typography>
          <Typography variant="h5" component="div">
            1,325,134
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Traffic Received  +43%
          </Typography>
        </CardContent>
      </Card>

      <Card className="card-container">
        <CardContent className="largeCard">
          <Typography variant="h5" component="div">
            Revenue Generated
          </Typography>
          <Typography>$59,342.32</Typography>
        </CardContent>
        </Card>
       
        <div>
           <h2>Recent Transactions</h2>
           <Scroll />
        </div>
      
    
    </Box>
  );
}

export default App;
