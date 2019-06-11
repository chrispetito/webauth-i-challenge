import React from "react";
// import logo from './logo.svg';
import "./App.css";
import LoginPage from "./components/LoginPage";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <h1>example</h1>
        <input />
        <NavBar />
        <Route to="/" component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
