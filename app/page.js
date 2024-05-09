"use client"

import HomePage from "../app/components/homePage";
import Jobs from './routes/jobs';
import Result from './routes/results';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </Router>
  );
}
