import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LoginSuccessPage from './pages/LoginSuccessPage';
import SuccessPage from './pages/SuccessPage';
import BattleModePage from './pages/BattleModePage';
import SoloBattleSetupPage from './pages/SoloBattleSetupPage';
import TeamBattleSetupPage from './pages/TeamBattleSetupPage';
import TeamLobbyPage from './pages/TeamLobbyPage';
import TeamCommandCenterPage from './pages/TeamCommandCenterPage';
import BattleArenaPage from './pages/BattleArenaPage';
import TeamBattleArenaPage from './pages/TeamBattleArenaPage';
import BattleAnalyticsPage from './pages/BattleAnalyticsPage';
import VictoryPage from './pages/VictoryPage';
import TeamVictoryPage from './pages/TeamVictoryPage';
import TeamStatsPage from './pages/TeamStatsPage';
import EventsPage from './pages/EventsPage';
import LocalBattlePage from './pages/LocalBattlePage';
import LearnPage from './pages/LearnPage';
import NotificationPage from './pages/NotificationPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login-success" element={<LoginSuccessPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/battle-mode" element={<BattleModePage />} />
        <Route path="/solo-battle-setup" element={<SoloBattleSetupPage />} />
        <Route path="/team-battle-setup" element={<TeamBattleSetupPage />} />
        <Route path="/team-lobby" element={<TeamLobbyPage />} />
        <Route path="/team-command-center" element={<TeamCommandCenterPage />} />
        <Route path="/battle-arena" element={<BattleArenaPage />} />
        <Route path="/team-battle-arena" element={<TeamBattleArenaPage />} />
        <Route path="/battle-analytics" element={<BattleAnalyticsPage />} />
        <Route path="/victory" element={<VictoryPage />} />
        <Route path="/team-victory" element={<TeamVictoryPage />} />
        <Route path="/team-stats" element={<TeamStatsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/local-battle" element={<LocalBattlePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
