import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./reducers/store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster
          toastOptions={{
            className: "text-sm",
            position: "bottom-right",
            duration: 5000,
            style: {
              borderRadius: "4px",
              padding: "0.5rem 1rem",
            },
          }}
        />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
