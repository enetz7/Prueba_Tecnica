import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

//Pagina principal para juntar el header y el body
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App bg-slate-100 h-screen ">
        <Header />
        <App />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
