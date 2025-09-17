import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/LoginSignup/Login";
import NewPassword from "../src/LoginSignup/NewPassword";
import TermsCondition from "./LoginSignup/TermsCondition";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
      </Routes>
    </Router>
  );
}
