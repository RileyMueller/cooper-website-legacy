import './index.css';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);