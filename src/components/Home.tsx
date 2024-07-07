import React from "react";
import Box from "@mui/material/Box";
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

const Home = () => {
  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [value, setValue] = React.useState(0);

  return (
    <>
      <Nav />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
    </>
  );
};

export default Home;
