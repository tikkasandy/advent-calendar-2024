import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import adventsDays from "./adventsDays";
import Calendar from "./components/Calendar";
import Dec1 from "./components/Dec1";
import Dec2 from "./components/Dec2";
import Dec3 from "./components/Dec3";
import "./App.scss";


function App() {


  return (
    <div className="App">
      <header className="App-header">Адвент Календар</header>
      <main>
      <Routes>
        <Route path="/" exact element={<Calendar />} />
        <Route path="/1" element={<Dec1 />} />
        <Route path="/2" element={<Dec2 />} />
        <Route path="/3" element={<Dec3 />} />
        </Routes>
        </main>
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
