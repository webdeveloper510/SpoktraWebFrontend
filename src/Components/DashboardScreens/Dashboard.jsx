import React from "react";
import { Paper, Typography, Box, Avatar, Stack, Button } from "@mui/material";
import Chart from "react-apexcharts";

import totalCallsIcon from "../../assets/images/stats1.png";
import avgScoreIcon from "../../assets/images/stats2.png";
import conversionIcon from "../../assets/images/stats3.png";
import callTimeIcon from "../../assets/images/stats4.png";

/* ------------------ CHART DATA ------------------ */
const lineOptions = {
  chart: { id: "weekly", toolbar: { show: false }, zoom: { enabled: false } },
  stroke: { curve: "smooth", width: 3 },
  colors: ["#9b6bff", "#dbb2ff"],
  grid: { borderColor: "#e9e6f4" },
  xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
  legend: { show: true, position: "top", horizontalAlign: "left" },
};
const lineSeries = [
  { name: "Total Calls", type: "column", data: [18, 25, 30, 28, 32, 26, 20] },
  { name: "Converted Calls", type: "line", data: [8, 12, 15, 13, 18, 16, 14] },
];

const donutOptions = {
  chart: { type: "donut" },
  labels: ["Excellent", "Fair", "Good", "Poor"],
  colors: ["#e8c3ff", "#d9b0ff", "#6b3fff", "#1f1e8a"],
  legend: { position: "right" },
};
const donutSeries = [45, 35, 15, 5];

/* ------------------ DASHBOARD DATA ------------------ */

const stats = [
  {
    title: "Total Calls Today",
    value: "1,847",
    caption: "+12% from yesterday",
    icon: totalCallsIcon,
  },
  {
    title: "Average Score",
    value: "87.4",
    caption: "+2.3% from last week",
    icon: avgScoreIcon,
  },
  {
    title: "Conversion Rate",
    value: "74.2%",
    caption: "+5.1% from last month",
    icon: conversionIcon,
  },
  {
    title: "Avg Call Time",
    value: "8m 32s",
    caption: "-15s from target",
    icon: callTimeIcon,
  },
];

const leaderboard = new Array(5).fill(0).map((_, i) => ({
  name: "Alex Rivera",
  avatar: `https://i.pravatar.cc/40?img=${i + 1}`,
  calls: 45 - i,
  score: "87.4%",
  conv: "78%",
}));

const alerts = [
  { title: "12 calls pending review", action: "REVIEW" },
  { title: "3 agents below threshold", action: "COACH AI" },
  { title: "Weekly report ready", action: "DOWNLOAD" },
  { title: "Team exceeded monthly goal", action: "CELEBRATE" },
];

/* ------------------ COMPONENT ------------------ */

export default function Dashboard() {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: 700, color: "#2a2540" }}
      >
        Dashboard
      </Typography>

      {/* ------------------ STATS ROW ------------------ */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mb: 3,
        }}
      >
        {stats.map((s, index) => (
          <Paper
            key={index}
            sx={{
              flex: "1 1 calc(20% - 24px)",
              minWidth: "240px",
              p: 3,
              borderRadius: "24px",
              background: "linear-gradient(180deg, #ffffff, #f7f5ff)",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.06)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "120px",
            }}
          >
            {/* LEFT TEXT */}
            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#6a6a6a",
                  mb: 1,
                }}
              >
                {s.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "#1a1a1a",
                }}
              >
                {s.value}
              </Typography>

              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 600,
                  mt: 1,
                  color: s.caption.includes("+") ? "#75BF1A" : "#BF461A",
                }}
              >
                {s.caption}
              </Typography>
            </Box>

            {/* RIGHT ICON */}
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #f0eaff, #ffffff)",
                border: "1px solid #e3dcfb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(150,120,255,0.15)",
              }}
            >
              <img src={s.icon} alt="stat icon" />
            </Box>
          </Paper>
        ))}
      </Box>

      {/* ------------------ CHARTS ROW ------------------ */}
      <Box sx={{ display: "flex", gap: 3, mb: 3, flexWrap: "wrap" }}>
        {/* Weekly Performance Chart */}
        <Paper
          sx={{
            flex: "1 1 60%",
            minWidth: "350px",
            p: 2.2,
            borderRadius: 2,
            height: 360,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
            Weekly Performance Trend
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Call volume and average scores over the past week
          </Typography>
          <Chart
            options={lineOptions}
            series={lineSeries}
            type="line"
            height="240"
          />
        </Paper>

        {/* Donut Chart */}
        <Paper
          sx={{
            flex: "1 1 35%",
            minWidth: "350px",
            p: 2.2,
            borderRadius: 2,
            height: 360,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
            Call Score Distribution
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Breakdown of call scores across all agents
          </Typography>
          <Box sx={{ height: 260, display: "flex", justifyContent: "center" }}>
            <Chart options={donutOptions} series={donutSeries} type="donut" />
          </Box>
        </Paper>
      </Box>

      {/* ------------------ LEADERBOARD & ALERTS ------------------ */}
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
        {/* Leaderboard */}
        <Paper
          sx={{ flex: "1 1 50%", minWidth: "350px", p: 2.2, borderRadius: 2 }}
        >
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
            Leaderboard
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Highest scoring agents this week
          </Typography>

          <Stack spacing={1.2}>
            {leaderboard.map((row, idx) => (
              <Paper
                key={idx}
                sx={{
                  p: 1.2,
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography color="text.secondary" sx={{ width: 28 }}>
                    {String(idx + 1).padStart(2, "0")}
                  </Typography>

                  <Avatar src={row.avatar} />

                  <Box>
                    <Typography sx={{ fontWeight: 600 }}>{row.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {row.calls} Calls
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={3}>
                  <Typography sx={{ fontWeight: 700 }}>{row.score}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {row.conv} conversion
                  </Typography>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Paper>

        {/* Alerts */}
        <Paper
          sx={{ flex: "1 1 50%", minWidth: "350px", p: 2.2, borderRadius: 2 }}
        >
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
            Recent Alerts & Actions
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Items requiring attention
          </Typography>

          <Stack spacing={1.2}>
            {alerts.map((alert, idx) => (
              <Paper
                key={idx}
                sx={{
                  p: 1.2,
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>
                    {alert.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Lead conversion requests awaiting approval
                  </Typography>
                </Box>

                <Button variant="outlined" size="small">
                  {alert.action}
                </Button>
              </Paper>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
