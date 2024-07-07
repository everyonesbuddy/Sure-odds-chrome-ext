// render has been depricated
// import React from "react";
// import Home from "../components/Home";
// import ReactDOM from "react-dom";

// function App() {
//   return <Home />;
// }

// const root = document.createElement("div");
// document.body.appendChild(root);

// // @ts-ignore
// const rootElement = ReactDOM.createRoot(root);
// rootElement.render(<App />);

// export default App;

import React from "react";
import Home from "../components/Home";
import { createRoot } from "react-dom/client";
import "./popup.css";

function App() {
  return (
    <>
      <Home />
      {/* <img src="Black_and_White_Modern_Vintage_Badge_Brand_Logo__2_-removebg-preview.png" /> */}
    </>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);

const rootElement = createRoot(root);
rootElement.render(<App />);

export default App;
