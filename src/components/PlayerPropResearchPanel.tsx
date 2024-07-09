import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";
import Button from "@mui/material/Button";

const PlayerPropResearchPanel = () => {
  const [selectedLeague, setSelectedLeague] = useState("");
  const [markets, setMarkets] = useState([]);
  const [selectedMarket, setSelectedMarket] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [searching, setSearching] = useState(false);

  const fetchMarketsForLeague = async (league) => {
    const marketsByLeague = {
      WNBA: ["Points", "Rebounds", "Assists", "Steals", "Blocks"],
      MLB: ["Pitcher Strikeouts", "Pitcher Walks", "Pitcher Hits Allowed"],
    };
    return marketsByLeague[league] || [];
  };

  useEffect(() => {
    if (selectedLeague) {
      fetchMarketsForLeague(selectedLeague).then(setMarkets);
      setSelectedMarket("");
    }
  }, [selectedLeague]);

  const handleLeagueChange = (event) => {
    setSelectedLeague(event.target.value);
  };

  const handleMarketChange = (event) => {
    setSelectedMarket(event.target.value);
  };

  const handlePlayerNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  const searchPlayerProps = async () => {
    setSearching(true);
    let apiUrl = "";
    // Determine the API URL based on the selected league and market
    if (selectedLeague === "WNBA" && selectedMarket === "Points") {
      apiUrl =
        "https://sheet.best/api/sheets/3e2f3059-39e3-4e13-bb45-8f55fb9cd88e";
    }
    if (selectedLeague === "WNBA" && selectedMarket === "Rebounds") {
      apiUrl =
        "https://sheet.best/api/sheets/3e2f3059-39e3-4e13-bb45-8f55fb9cd88e/tabs/WNBA_Player_Props_Rebounds";
    }
    if (selectedLeague === "WNBA" && selectedMarket === "Assists") {
      apiUrl =
        "https://sheet.best/api/sheets/3e2f3059-39e3-4e13-bb45-8f55fb9cd88e/tabs/WNBA_Player_Props_Assists";
    }
    if (selectedLeague === "WNBA" && selectedMarket === "Steals") {
      apiUrl =
        "https://sheet.best/api/sheets/3e2f3059-39e3-4e13-bb45-8f55fb9cd88e/tabs/WNBA_Player_Props_Steals";
    }
    if (selectedLeague === "WNBA" && selectedMarket === "Blocks") {
      apiUrl =
        "https://sheet.best/api/sheets/3e2f3059-39e3-4e13-bb45-8f55fb9cd88e/tabs/WNBA_Player_Props_Blocks";
    }
    if (selectedLeague === "MLB" && selectedMarket === "Pitcher Strikeouts") {
      apiUrl =
        "https://sheet.best/api/sheets/02466f37-6aab-4994-bb71-008f5c73aff3";
    }
    if (selectedLeague === "MLB" && selectedMarket === "Pitcher Walks") {
      apiUrl =
        "https://sheet.best/api/sheets/02466f37-6aab-4994-bb71-008f5c73aff3/tabs/MLB_Player_Props_Model_Walks";
    }
    if (selectedLeague === "MLB" && selectedMarket === "Pitcher Hits Allowed") {
      apiUrl =
        "https://sheet.best/api/sheets/02466f37-6aab-4994-bb71-008f5c73aff3/tabs/MLB_Player_Props_Model_Hits";
    }
    // Add more conditions for other leagues and markets here

    if (apiUrl) {
      console.log("Fetching player data from:", apiUrl);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("Player data:", data);
        const foundPlayerData = data.find(
          (player) => player.player.toLowerCase() === playerName.toLowerCase()
        );
        console.log("Found player data:", foundPlayerData);
        if (foundPlayerData) {
          setPlayerData(foundPlayerData); // Update playerData state
        } else {
          console.log("Player not found");
          setPlayerData(null); // Reset playerData state if player not found
        }
      } catch (error) {
        console.error("Error fetching player data:", error);
      } finally {
        setSearching(false); // End searching regardless of outcome
      }
    } else {
      setSearching(false);
    }
  };

  // Function to map selected market to property prefix
  const getPropertyPrefix = (market) => {
    const prefixMap = {
      Points: "points",
      Rebounds: "rebounds",
      Assists: "assists",
      Steals: "steals",
      Blocks: "blocks",
      "Pitcher Strikeouts": "pitcherStrikeouts",
      "Pitcher Hits Allowed": "pitcherHitsAllowed",
      "Pitcher Walks": "pitcherWalks",
    };
    return prefixMap[market] || "";
  };

  // Function to dynamically generate property names for display
  function displayPlayerStats(playerData) {
    const stats = [];
    const prefix = getPropertyPrefix(selectedMarket); // Corrected to use the selected market

    for (let i = 1; i <= 5; i++) {
      let suffix = "";
      switch (i) {
        case 1:
          suffix = "LastGame";
          break;
        case 2:
          suffix = "TwoGamesAgo";
          break;
        case 3:
          suffix = "ThreeGamesAgo";
          break;
        case 4:
          suffix = "FourGamesAgo";
          break;
        case 5:
          suffix = "FiveGamesAgo";
          break;
      }
      const propName = `${prefix}${suffix}`;

      if (playerData.hasOwnProperty(propName)) {
        stats.push(
          <Typography variant="body2" key={propName}>
            {i} Game(s) Ago: {playerData[propName]}
          </Typography>
        );
      }
    }

    return stats;
  }

  return (
    <div>
      <FormControl
        fullWidth
        sx={{
          mb: 2,
          ".MuiOutlinedInput-root": {
            borderRadius: "12px",
            height: "40px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          },
        }}
      >
        <InputLabel>League</InputLabel>
        <Select
          value={selectedLeague}
          label="League"
          onChange={handleLeagueChange}
          sx={{ ".MuiSelect-select": { py: 0 } }}
        >
          <MenuItem value="WNBA">WNBA</MenuItem>
          <MenuItem value="MLB">MLB</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        fullWidth
        sx={{
          mb: 2,
          ".MuiOutlinedInput-root": {
            borderRadius: "12px",
            height: "40px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          },
        }}
      >
        <InputLabel>Market</InputLabel>
        <Select
          value={selectedMarket}
          label="Market"
          onChange={handleMarketChange}
          disabled={!selectedLeague}
          sx={{ ".MuiSelect-select": { py: 0 } }}
        >
          {markets.map((market) => (
            <MenuItem key={market} value={market}>
              {market}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        fullWidth
        label="Search Player"
        value={playerName}
        onChange={handlePlayerNameChange}
        sx={{
          ".MuiOutlinedInput-root": {
            borderRadius: "12px",
            height: "40px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          },
        }}
      />
      <Button
        variant="contained"
        onClick={searchPlayerProps}
        sx={{
          mt: 2, // Margin top
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          height: "40px",
          ".MuiButton-contained": {
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#115293",
            },
          },
        }}
      >
        Search
      </Button>
      {searching ? (
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px", // Adjust height as needed
            elevation: 12,
            padding: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            borderRadius: "16px",
            mt: 2,
            mb: 2,
          }}
        >
          <CircularProgress />
        </Card>
      ) : playerData ? (
        <Card
          sx={{
            elevation: 12,
            padding: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            borderRadius: "16px",
            mt: 2,
            mb: 2,
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {playerData.player}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {selectedMarket} - {playerData.team}
            </Typography>
            {displayPlayerStats(playerData)}
          </CardContent>
        </Card>
      ) : (
        <Card
          sx={{
            elevation: 12,
            padding: "16px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
            borderRadius: "16px",
            mt: 2, // Margin top for spacing
            mb: 2, // Margin bottom for spacing
          }}
        >
          <CardContent>
            <Typography variant="h6" component="div">
              No player data found.
            </Typography>
            <Typography sx={{ mt: 1 }} color="text.secondary">
              Please try searching for a different player.
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PlayerPropResearchPanel;
