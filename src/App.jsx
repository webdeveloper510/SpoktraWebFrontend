import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../src/Components/LoginSignup/Login";
import NewPassword from "../src/Components/LoginSignup/NewPassword";
import TermsCondition from "../src/Components/LoginSignup/TermsCondition";

import Layout from "../src/Components/DashboardScreens/Layout";
import Dashboard from "../src/Components/DashboardScreens/Dashboard";
import AgentPerformance from "../src/Components/DashboardScreens/AgentPerformance";
import CallOverview from "../src/Components/DashboardScreens/CallOverview";
import ImprovementSuggestions from "../src/Components/DashboardScreens/ImprovementSuggestions";
import UserManagement from "../src/Components/DashboardScreens/UserManagement";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Login />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/terms-condition" element={<TermsCondition />} />

        {/* PROTECTED ROUTES WRAPPED IN LAYOUT */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agent-performance" element={<AgentPerformance />} />
          <Route path="/call-overview" element={<CallOverview />} />
          <Route path="/improvement" element={<ImprovementSuggestions />} />
          <Route path="/user-management" element={<UserManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}
