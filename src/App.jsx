import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./index.css";
import StockTable from "./pages/StockTable";
import Header from "./pages/header";
export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/signin" Component={SignIn} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/dashboard" Component={StockTable} />
        </Routes>
      </Router>
    </>
  );
}
