import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import axios from "axios";
import moment from "moment";
import XIcon from "@mui/icons-material/x";

const Leaderboard = () => {
  const [betsData, setBetsData] = useState([]);
  const [filteredBets, setFilteredBets] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://sheet.best/api/sheets/b9c7054b-1a70-4afb-9a14-c49967e8faf8"
      );
      setBetsData(response.data);
      setFilteredBets(response.data); // Initial filter setup
    };
    fetchData();
  }, []);

  useEffect(() => {
    const now = moment();
    const filtered = betsData.filter((bet) => {
      const postedTime = moment(bet.postedTime);
      switch (filter) {
        case "day":
          return now.diff(postedTime, "days") < 3;
        case "week":
          return now.diff(postedTime, "weeks") < 1;
        case "month":
          return now.diff(postedTime, "months") < 1;
        case "all":
        default:
          return true;
      }
    });
    setFilteredBets(filtered);
  }, [filter, betsData]);

  const aggregateBets = (bets) => {
    const handicappers: {
      [key: string]: {
        totalOdds: number;
        totalWonOdds: number;
        numberOfBets: number;
        numberOfBetsWon: number;
        potentialWins: number;
      };
    } = {};

    bets.forEach((bet, index) => {
      if (bet.betResult === null) return;

      const odds = parseInt(bet.odds, 10);
      const username = bet.twitterUsername || "Anonymous";
      if (!handicappers[username]) {
        handicappers[username] = {
          totalOdds: 0,
          totalWonOdds: 0,
          numberOfBets: 0,
          numberOfBetsWon: 0,
          potentialWins: 0,
        };
      }
      handicappers[username].totalOdds += odds;
      handicappers[username].numberOfBets += 1;
      if (bet.betResult === "won") {
        handicappers[username].totalWonOdds += odds;
        handicappers[username].numberOfBetsWon += 1;
        // Adjust calculation based on the sign of the odds
        if (odds > 0) {
          handicappers[username].potentialWins += 100 * (odds / 100); // For positive odds
        } else {
          handicappers[username].potentialWins += 100 * (100 / Math.abs(odds)); // For negative odds
        }
      }
    });

    return Object.entries(handicappers)
      .map(
        ([
          username,
          {
            totalOdds,
            totalWonOdds,
            numberOfBets,
            numberOfBetsWon,
            potentialWins,
          },
        ]) => ({
          username,
          totalOdds,
          totalWonOdds,
          numberOfBets,
          numberOfBetsWon,
          winRatio: (numberOfBetsWon / numberOfBets) * 100, // Calculate win ratio as a percentage
          potentialWins,
        })
      )
      .sort((a, b) => b.potentialWins - a.potentialWins); // Sort by potentialWins
  };

  const renderHandicapperCard = (handicapper, index) => (
    <Card
      sx={{ borderRadius: "16px", boxShadow: 3, m: 2 }}
      key={handicapper.username}
    >
      <CardContent>
        <Typography
          variant="h5"
          sx={{ paddingBottom: "20px", display: "flex", alignItems: "center" }}
        >
          {index + 1}.{" "}
          <Avatar
            src={`https://avatar.iran.liara.run/username?username=${handicapper.username}`}
            alt={"Avatar"}
            sx={{
              width: 24,
              height: 24,
              display: "inline-flex",
              verticalAlign: "middle",
              marginRight: 1,
            }}
          />
          <a
            href={`https://x.com/${handicapper.username}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "20px" }}
          >
            {handicapper.username}
          </a>
          <XIcon
            style={{
              width: "15px",
              height: "15px",
              marginLeft: "8px",
            }}
          />
        </Typography>
        <Typography sx={{ paddingLeft: "25px" }}>
          • <strong>Total Won Odds:</strong>{" "}
          <span style={{ fontSize: "0.875em" }}>
            {handicapper.totalWonOdds}
          </span>
          <Tooltip title="Total amount of odds for bets that were won">
            <IconButton size="small">
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Typography>
        <Typography sx={{ paddingLeft: "25px" }}>
          • <strong>Total Won %:</strong>{" "}
          <span style={{ fontSize: "0.875em" }}>
            ({handicapper.numberOfBetsWon} / {handicapper.numberOfBets}){" "}
            {handicapper.winRatio.toFixed(2)}%
          </span>
          <Tooltip title="Percentage of bets won out of total bets made">
            <IconButton size="small">
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Typography>
        <Typography sx={{ paddingLeft: "25px" }}>
          • <strong>Potential Wins:</strong>{" "}
          <span style={{ fontSize: "0.875em" }}>
            ${handicapper.potentialWins.toFixed(2)}
          </span>
          <Tooltip title="Potential earnings based on a $100 bet for each winning bet, adjusted for the odds">
            <IconButton size="small">
              <HelpOutlineIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", p: 2 }}>
        {["all", "day", "week", "month"].map((f) => (
          <Button
            key={f}
            variant={filter === f ? "contained" : "outlined"}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </Box>
      <Box>{aggregateBets(filteredBets).map(renderHandicapperCard)}</Box>
    </Box>
  );
};

export default Leaderboard;
