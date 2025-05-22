import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Cover } from './components/cover/component-cover';
import { WorkSection } from "./components/work/component-work-section";
import { ContactForm } from "./components/contact/component-contact";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cover />} />
        <Route path="/mis-trabajos" element={< WorkSection />} />
        <Route path="/contacto" element={< ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
