import React from "react";
import ReactDOM from "react-dom/client"; // updated import
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer";

// Use React 18 createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    {/* If you want to include Footer globally, move it here */}
   
  </React.StrictMode>
);

// Performance measurement (optional)
reportWebVitals();
