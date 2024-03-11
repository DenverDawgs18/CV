import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import General from "./components/General.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <General />
  </React.StrictMode>,
);
