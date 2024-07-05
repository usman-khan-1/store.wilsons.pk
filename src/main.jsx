import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./demo22.css";
import "./style.css";
import "./icons.css";
import { Provider } from "react-redux";
import { store } from "./Store/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
