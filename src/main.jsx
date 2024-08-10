import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./demo22.css";
import "./style.css";
import "./icons.css";
import { Provider } from "react-redux";
import { persistor, store } from "./Store/Store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
