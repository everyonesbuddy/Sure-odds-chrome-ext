import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Nav = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#5E17EB" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Sure Odds
        </Typography>
        <Button color="inherit" style={{ fontSize: "12px" }}>
          <a
            href="https://discord.com/oauth2/authorize?client_id=1234332654170669116&permissions=1084479765568&scope=bot"
            target="_blank"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Get Discord Bot
          </a>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
