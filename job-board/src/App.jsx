import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import Applications from "./pages/Applications";
import "./styles/theme.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </BrowserRouter>
  );
}
