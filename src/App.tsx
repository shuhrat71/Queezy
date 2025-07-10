import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./assets/components/Sidebar";
import { Leaderboard, Settings } from "@mui/icons-material";
import Discover from "./features/pages/Discover/Discover";
import QuizLibrary from "./features/pages/QuizLibrary/QuizLibrary";
import { Box } from "@mui/material";
import Topbar from "./assets/components/Topbar";
import Dashboard from "./features/pages/Dashboard/Dashboard";

function App() {
  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Sidebar chapda */}
      <Box sx={{ width: 250, flexShrink: 0 }}>
        <Sidebar />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            height: 100,
            width: "100%",
            backgroundColor: "#fff",
            boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
            zIndex: 1,
          }}
        >
          <Topbar />
        </Box>

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            backgroundColor: "#f9f9fc",
            padding: 3,
            color: "#333",
          }}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quizLibrary" element={<QuizLibrary />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
