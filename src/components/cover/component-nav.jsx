// ...existing code...
import { useState } from "react";
import { useMenu } from "../../context/context-menu";
import { CustomLink } from "../custom-link/component-custom-link";
import HamburgerIcon from "../icons/component-bars-icon";
import "./styles-nav.css";

export function NavBar() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();
  const [closing, setClosing] = useState(false);

  const handleToggle = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        closeMenu();
        setClosing(false);
      }, 300);
    } else {
      toggleMenu();
    }
  };

  return (
    <header className={menuOpen || closing ? "menu-open" : ""}>
      {(menuOpen || closing) && (
        <div
          className={`menu-overlay ${closing ? "closing" : ""}`}
          onClick={handleToggle}
          aria-hidden="true"
        />
      )}
      
      <nav>
        <span className="logo">Milena Gracioso</span>
        <button
          onClick={handleToggle}
          aria-expanded={menuOpen}
          aria-label="menu"
        >
          <HamburgerIcon className="bars" />
        </button>

        {(menuOpen || closing) && (
          <ul className={`dropdown-menu ${closing ? "closing" : ""}`}>
            <li>
              <CustomLink
                type="Home"
                route="/"
                variant="menu"
                onClick={handleToggle}
              />
            </li>
            <li>
              <CustomLink
                type="Obras"
                route="/mis-trabajos"
                variant="menu"
                onClick={handleToggle}
              />
            </li>
            <li>
              <CustomLink
                type="Contacto"
                route="/contacto"
                variant="menu"
                onClick={handleToggle}
              />
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
