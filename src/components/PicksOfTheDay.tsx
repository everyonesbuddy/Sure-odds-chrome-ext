import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Grid, Link } from "@mui/material";

const PicksOfTheDay = () => {
  const [picks, setPicks] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://sheet.best/api/sheets/b9c7054b-1a70-4afb-9a14-c49967e8faf8"
  //       );
  //       setPicks(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sheet.best/api/sheets/b9c7054b-1a70-4afb-9a14-c49967e8faf8"
        );
        const currentTime = new Date();
        const livePicks = response.data.filter((pick) => {
          const gameStartTime = new Date(pick.gameCommenceTime);
          return gameStartTime > currentTime;
        });
        setPicks(livePicks);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getLeagueName = (leagueCode) => {
    const leagueNames = {
      basketball_wnba: "WNBA 🏀",
      baseball_mlb: "MLB ⚾",
      americanfootball_nfl: "NFL 🏈",
    };

    return leagueNames[leagueCode] || leagueCode;
  };

  // Utility function to format date
  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short", // "Sep" instead of "September"
      day: "2-digit", // "05"
      year: "numeric", // "2024"
      hour: "numeric", // "8 PM" instead of "08:20:00 PM"
      minute: "2-digit", // "20"
      hour12: true, // Use AM/PM instead of 24-hour format
    }).format(date);
  }

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      {picks.map((pick, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            raised
            sx={{
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {getLeagueName(pick.league)}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Bet Type: {pick.pickType}
              </Typography>
              <Typography variant="body2">
                Game Commence Time: {formatDate(pick.gameCommenceTime)}
              </Typography>
              {pick.pickType === "money line" ? (
                <>
                  <Typography variant="body2">
                    Team Picked: {pick.teamPicked}
                  </Typography>
                  <Typography variant="body2">Odds: {pick.odds}</Typography>
                  {pick.twitterUsername !== "" && (
                    <Typography variant="body2">
                      X Profile:{" "}
                      <Link
                        href={`https://twitter.com/${pick.twitterUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pick.twitterUsername}
                      </Link>
                    </Typography>
                  )}
                </>
              ) : (
                <>
                  <Typography variant="body2">
                    Market: {pick.market.split("_")[0].toUpperCase()}{" "}
                    {pick.market.split("_")[1]?.toUpperCase()}
                  </Typography>
                  <Typography variant="body2">Odds: {pick.odds}</Typography>
                  <Typography variant="body2">
                    Player Picked: {pick.playerPicked}
                  </Typography>
                  {pick.twitterUsername !== "" && (
                    <Typography variant="body2">
                      X Profile:{" "}
                      <Link
                        href={`https://twitter.com/${pick.twitterUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {pick.twitterUsername}
                      </Link>
                    </Typography>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PicksOfTheDay;
