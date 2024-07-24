import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Nav = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#4F46E5" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sure Odds
        </Typography>
        <Button color="inherit" style={{ fontSize: "12px" }}>
          <a
            href="https://buymeacoffee.com/sureodds
"
            target="_blank"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Buy me a coffee
          </a>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
