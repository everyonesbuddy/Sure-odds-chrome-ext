import React, { useState, useEffect } from "react";
import { Box, Link } from "@mui/material";
import Nav from "./Nav";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomTabPanel from "./CustomTabPanel";
import BestPropsPanel from "./BestPropsPanel";
import PlayerPropResearchPanel from "./PlayerPropResearchPanel";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const affiliates = [
  {
    message: "Parlay Play: Get $100 match for your first deposit",
    color: "#eac100",
    url: "https://parlayplay.io/account/signup?coupon=joeddomitor",
  },
  {
    message: "Underdog: Get first deposit matched in bonus cash up to $250",
    color: "#1b1b1b",
    url: "https://play.underdogfantasy.com/magnusdomitor",
  },
  {
    message: "Prize Picks: First deposit match up to $100!",
    color: "#8000ff",
    url: "https://app.prizepicks.com/sign-up?invite_code=PR-SUWVT13",
  },
  // Add more affiliates here
];

const Home = () => {
  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [value, setValue] = React.useState(0);
  const [currentAffiliateIndex, setCurrentAffiliateIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAffiliateIndex(
        (prevIndex) => (prevIndex + 1) % affiliates.length
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Nav />
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            zIndex: 1100,
            position: "sticky",
            top: 0,
            backgroundColor: "background.paper",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#5E17EB",
              },
            }}
          >
            <Tab
              label="Best Props"
              {...a11yProps(0)}
              sx={{
                color: "#5E17EB",
                fontSize: "10px",
              }}
            />
            <Tab
              label="Player Research"
              {...a11yProps(1)}
              sx={{
                color: "#5E17EB",
                fontSize: "10px",
              }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <BestPropsPanel />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PlayerPropResearchPanel />
        </CustomTabPanel>
      </Box>
      {/* footer */}
      <Box
        sx={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: affiliates[currentAffiliateIndex].color,
          color: "#F0F0F0",
          padding: "10px",
          textAlign: "center",
          zIndex: 1000,
        }}
      >
        {affiliates[currentAffiliateIndex].message}{" "}
        <Link
          href={affiliates[currentAffiliateIndex].url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#4FC3F7",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Claim Now
        </Link>
      </Box>
    </>
  );
};

export default Home;
