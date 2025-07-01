import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./assets/components/Sidebar";
import { Dashboard, Leaderboard, Settings } from "@mui/icons-material";

import Layout from "./components/layout/layout";
import Discover from "./features/pages/Discover/Discover";
import QuizLibrary from "./features/pages/QuizLibrary/QuizLibrary";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "24px" }}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/quizLibrary" element={<QuizLibrary />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
