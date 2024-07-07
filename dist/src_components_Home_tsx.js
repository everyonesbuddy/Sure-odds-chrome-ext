"use strict";
(self["webpackChunksure_odds_extension"] = self["webpackChunksure_odds_extension"] || []).push([["src_components_Home_tsx"],{

/***/ "./src/components/BestPropsPanel.tsx":
/*!*******************************************!*\
  !*** ./src/components/BestPropsPanel.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_icons_material_ArrowUpward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/ArrowUpward */ "./node_modules/@mui/icons-material/ArrowUpward.js");
/* harmony import */ var _mui_icons_material_ArrowDownward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowDownward */ "./node_modules/@mui/icons-material/ArrowDownward.js");




const BestPropsPanel = () => {
    const [bestProps, setBestProps] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], { container: true, spacing: 2 }, bestProps.map((prop, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], { item: true, xs: 12, sm: 6, md: 4, key: index },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { sx: {
                    elevation: 12,
                    padding: "16px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // Deeper box shadow
                    borderRadius: "16px", // More rounded corners
                } },
                " ",
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { variant: "h5", component: "div", sx: { fontWeight: "bold", marginBottom: "8px" } }, prop["Player Name"]),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { color: "text.secondary", sx: { marginBottom: "4px" } },
                        prop["Player Team"],
                        " - ",
                        prop.League),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: { marginBottom: "4px" } },
                        "Market: ",
                        prop.Market),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: { marginBottom: "4px" } },
                        "Prop Line: ",
                        prop["Prop Line"]),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: {
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "4px",
                        } },
                        "Best Bet: ",
                        prop["Best Bet"],
                        " (EV: ",
                        prop["Best EV"],
                        ")",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { style: { marginLeft: "8px" } }, prop["Best Bet"] === "Over" ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowUpward__WEBPACK_IMPORTED_MODULE_5__["default"], { style: { color: "green" } })) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowDownward__WEBPACK_IMPORTED_MODULE_6__["default"], { style: { color: "red" } })))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: { marginBottom: "4px" } },
                        "Hit Rate Last 5: ",
                        prop["Hit Rate Last 5"],
                        "%"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null,
                        "Odds: Over ",
                        prop["Over Odds"],
                        ", Under ",
                        prop["Under Odds"])))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BestPropsPanel);


/***/ }),

/***/ "./src/components/CustomTabPanel.tsx":
/*!*******************************************!*\
  !*** ./src/components/CustomTabPanel.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



const CustomTabPanel = (props) => {
    const { children, value, index } = props, other = __rest(props, ["children", "value", "index"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", Object.assign({ role: "tabpanel", hidden: value !== index, id: `simple-tabpanel-${index}`, "aria-labelledby": `simple-tab-${index}` }, other), value === index && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], { sx: { p: 3 } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], null, children)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTabPanel);


/***/ }),

/***/ "./src/components/Home.tsx":
/*!*********************************!*\
  !*** ./src/components/Home.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./src/components/Nav.tsx");
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Tabs */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Tab */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _CustomTabPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomTabPanel */ "./src/components/CustomTabPanel.tsx");
/* harmony import */ var _BestPropsPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BestPropsPanel */ "./src/components/BestPropsPanel.tsx");
/* harmony import */ var _PlayerPropResearchPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerPropResearchPanel */ "./src/components/PlayerPropResearchPanel.tsx");








const Home = () => {
    const a11yProps = (index) => ({
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    });
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { width: "100%" } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { borderBottom: 1, borderColor: "divider" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], { value: value, onChange: handleChange, "aria-label": "basic tabs example", centered: true, sx: {
                        "& .MuiTabs-indicator": {
                            backgroundColor: "#5E17EB",
                        },
                    } },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ label: "Best Props" }, a11yProps(0), { sx: {
                            color: "#5E17EB",
                            fontSize: "10px",
                        } })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({ label: "Player Research" }, a11yProps(1), { sx: {
                            color: "#5E17EB",
                            fontSize: "10px",
                        } })))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomTabPanel__WEBPACK_IMPORTED_MODULE_2__["default"], { value: value, index: 0 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BestPropsPanel__WEBPACK_IMPORTED_MODULE_3__["default"], null)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomTabPanel__WEBPACK_IMPORTED_MODULE_2__["default"], { value: value, index: 1 },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PlayerPropResearchPanel__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./src/components/Nav.tsx":
/*!********************************!*\
  !*** ./src/components/Nav.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");





const Nav = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], { position: "static", sx: { backgroundColor: "#5E17EB" } },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "h6", component: "div", sx: { flexGrow: 1 } }, "Sure Odds"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__["default"], { color: "inherit", style: { fontSize: "12px" } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", { href: "https://discord.com/oauth2/authorize?client_id=1234332654170669116&permissions=1084479765568&scope=bot", target: "_blank", style: { textDecoration: "none", color: "#ffffff" } }, "Get Discord Bot")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);


/***/ }),

/***/ "./src/components/PlayerPropResearchPanel.tsx":
/*!****************************************************!*\
  !*** ./src/components/PlayerPropResearchPanel.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const PlayerPropResearchPanel = () => {
    const [selectedLeague, setSelectedLeague] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [markets, setMarkets] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [selectedMarket, setSelectedMarket] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [playerName, setPlayerName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [playerData, setPlayerData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [searching, setSearching] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const fetchMarketsForLeague = (league) => __awaiter(void 0, void 0, void 0, function* () {
        const marketsByLeague = {
            WNBA: ["Points", "Rebounds", "Assists", "Steals", "Blocks"],
            MLB: ["Pitcher Strikeouts", "Pitcher Walks", "Pitcher Hits Allowed"],
        };
        return marketsByLeague[league] || [];
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
    const searchPlayerProps = () => __awaiter(void 0, void 0, void 0, function* () {
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
                const response = yield fetch(apiUrl);
                const data = yield response.json();
                console.log("Player data:", data);
                const foundPlayerData = data.find((player) => player.player.toLowerCase() === playerName.toLowerCase());
                console.log("Found player data:", foundPlayerData);
                if (foundPlayerData) {
                    setPlayerData(foundPlayerData); // Update playerData state
                }
                else {
                    console.log("Player not found");
                    setPlayerData(null); // Reset playerData state if player not found
                }
            }
            catch (error) {
                console.error("Error fetching player data:", error);
            }
            finally {
                setSearching(false); // End searching regardless of outcome
            }
        }
        else {
            setSearching(false);
        }
    });
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
                stats.push(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "body2", key: propName },
                    i,
                    " Game(s) Ago: ",
                    playerData[propName]));
            }
        }
        return stats;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { fullWidth: true, sx: {
                mb: 2,
                ".MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    height: "40px",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                },
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, "League"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { value: selectedLeague, label: "League", onChange: handleLeagueChange, sx: { ".MuiSelect-select": { py: 0 } } },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { value: "WNBA" }, "WNBA"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { value: "MLB" }, "MLB"))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { fullWidth: true, sx: {
                mb: 2,
                ".MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    height: "40px",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                },
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, "Market"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { value: selectedMarket, label: "Market", onChange: handleMarketChange, disabled: !selectedLeague, sx: { ".MuiSelect-select": { py: 0 } } }, markets.map((market) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { key: market, value: market }, market))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { fullWidth: true, label: "Search Player", value: playerName, onChange: handlePlayerNameChange, sx: {
                ".MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    height: "40px",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "contained", onClick: searchPlayerProps, sx: {
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
            } }, "Search"),
        searching ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px", // Adjust height as needed
                elevation: 12,
                padding: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                borderRadius: "16px",
                mt: 2,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null))) : playerData ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { sx: {
                elevation: 12,
                padding: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                borderRadius: "16px",
                mt: 2,
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "h5", component: "div" }, playerData.player),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], { sx: { mb: 1.5 }, color: "text.secondary" },
                    selectedMarket,
                    " - ",
                    playerData.team),
                displayPlayerStats(playerData)))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { sx: {
                elevation: 12,
                padding: "16px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                borderRadius: "16px",
                mt: 2, // Margin top for spacing
            } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], { variant: "h6", component: "div" }, "No player data found."),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], { sx: { mt: 1 }, color: "text.secondary" }, "Please try searching for a different player."))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerPropResearchPanel);


/***/ })

}]);
//# sourceMappingURL=src_components_Home_tsx.js.map