import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function logOut() {
  localStorage.removeItem("token");
  window.location.reload(false);
}

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ticket Tracker
          </Typography>
          <Button  color="inherit" onClick={logOut}>
            logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
