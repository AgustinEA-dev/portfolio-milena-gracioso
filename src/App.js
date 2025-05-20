import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Cover } from './components/cover/component-cover';
import { WorkSection } from "./components/work/component-work-section";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/mis-trabajos" element={< WorkSection />} />
      </Routes>
    </Router>
  );
}

export default App;
