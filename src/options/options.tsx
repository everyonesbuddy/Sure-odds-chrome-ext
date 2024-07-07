// import React from "react";
// import Home from "../components/Home";
// import ReactDOM from "react-dom";
import React from "react";
import Home from "../components/Home";
import { createRoot } from "react-dom/client";
import "./options.css";

function App() {
  return <Home />;
}

const root = document.createElement("div");
document.body.appendChild(root);

const rootElement = createRoot(root);
rootElement.render(<App />);

export default App;
