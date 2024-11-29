import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Day from "./pages/Day";
import "./App.scss";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" exact element={<Calendar />} />
          <Route path="/:dayId" element={<Day />} />
        </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
