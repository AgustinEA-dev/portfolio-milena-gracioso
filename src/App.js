import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cover } from "./components/cover/component-cover";
import { WorkSection } from "./components/work/component-work-section";
import { WorkGallerySection } from "./components/work/component-work-gallery-section"; // ⬅️ nueva sección
import { ContactForm } from "./components/contact/component-contact";
import { NavBar } from "./components/cover/component-nav";
import { MenuProvider } from "./context/context-menu";

function App() {
  return (
    <Router>
      <MenuProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/mis-trabajos" element={<WorkSection />} />
          <Route path="/obra/:id" element={<WorkGallerySection />} /> {/* ⬅️ nueva ruta */}
          <Route path="/contacto" element={<ContactForm />} />
        </Routes>
      </MenuProvider>
    </Router>
  );
}

export default App;
