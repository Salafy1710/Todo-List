import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import AddStudent from "./AddStudent";
import ListStudent from "./ListStudent";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AddStudent />
    <ListStudent />
    <App />
  </Provider>
);