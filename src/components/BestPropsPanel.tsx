import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface BestProp {
  "Player Name": string;
  "Player Team": string;
  League: string;
  Market: string;
  "Prop Line": string;
  "Best Bet": string;
  "Best EV": string;
  "Hit Rate Last 5": string;
  "Over Odds": string;
  "Under Odds": string;
}

const BestPropsPanel: React.FC = () => {
  const [bestProps, setBestProps] = useState<BestProp[]>([]);

  useEffect(() => {
    fetch("https://sheet.best/api/sheets/ba7d096f-6b2c-499c-9249-b5736dcb8de7")
      .then((response) => response.json())
      .then((data) => {
        const shuffledData = data.sort(() => 0.5 - Math.random());
        setBestProps(shuffledData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleLike = () => {
    console.log("Liked!");
  };

  const handleDislike = () => {
    console.log("Disliked!");
  };

  return (
    <>
      <Grid container spacing={2}>
        {bestProps.map((prop, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                elevation: 12,
                padding: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // Deeper box shadow
                borderRadius: "16px", // More rounded corners
              }}
            >
              {" "}
              {/* Increased elevation and padding */}
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold", marginBottom: "8px" }}
                >
                  {prop["Player Name"]}
                </Typography>
                <Typography color="text.secondary" sx={{ marginBottom: "4px" }}>
                  {prop["Player Team"]} - {prop.League}
                </Typography>
                <Typography sx={{ marginBottom: "4px" }}>
                  Market: {prop.Market}
                </Typography>
                <Typography sx={{ marginBottom: "4px" }}>
                  Prop Line: {prop["Prop Line"]}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "4px",
                  }}
                >
                  Best Bet: {prop["Best Bet"]} (EV: {prop["Best EV"]})
                  <span style={{ marginLeft: "8px" }}>
                    {prop["Best Bet"] === "Over" ? (
                      <ArrowUpwardIcon style={{ color: "green" }} />
                    ) : (
                      <ArrowDownwardIcon style={{ color: "red" }} />
                    )}
                  </span>
                </Typography>
                <Typography sx={{ marginBottom: "4px" }}>
                  Hit Rate Last 5: {prop["Hit Rate Last 5"]}%
                </Typography>
                <Typography>
                  Odds: Over {prop["Over Odds"]}, Under {prop["Under Odds"]}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BestPropsPanel;
