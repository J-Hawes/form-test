import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Movers from "./movers";
import Property from "./property";
import Thankyou from "./thanks";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="movers" element={<Movers />} />
        <Route path="property-report" element={<Property />} />
        <Route path="thanks" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
