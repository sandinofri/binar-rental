import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { landingReducers } from "./modules/Landing/app/store.js";
import { adminReducers } from "./modules/Admin/redux/store.js";

const rootReducers = configureStore({
  reducer: { ...landingReducers, ...adminReducers }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={rootReducers}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
