import { useState } from "react";

import { CustomLink } from "../custom-link/component-custom-link";

import HamburgerIcon from "../icons/component-bars-icon";

import "./styles-nav.css";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggleMenu = () => {
    if (open) {
      setClosing(true); // iniciamos animación de cierre
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 300); // mismo tiempo que la animación CSS
    } else {
      setOpen(true);
    }
  };
  return (
    <header>
      <nav>
        <span>Milena Gracioso</span>
        <button onClick={toggleMenu} aria-expanded={open} aria-label="menu">
          <HamburgerIcon classname="bars" />
        </button>
        {(open || closing) && (
          <ul className={`dropdown-menu ${closing ? "closing" : ""}`}>
            <li>
              <CustomLink type="Home" route="/" variant="menu" />
            </li>
            <li>
              <CustomLink
                type="Mis trabajos"
                route="/mis-trabajos"
                variant="menu"
              />
            </li>
            <li>
              <CustomLink type="Contacto" route="/contacto" variant="menu" />
            </li>
          </ul>
        )}
        {(open || closing) && (
          <>
            {/* Overlay */}
            <div
              className={`menu-overlay ${closing ? "closing" : ""}`}
              onClick={toggleMenu}
            ></div>

            {/* Menú desplegable */}
            <ul className={`dropdown-menu ${closing ? "closing" : ""}`}>
              <li>
                <CustomLink
                  type="Home"
                  route="/"
                  variant="menu"
                  onClick={toggleMenu}
                />
              </li>
              <li>
                <CustomLink
                  type="Mis trabajos"
                  route="/mis-trabajos"
                  variant="menu"
                  onClick={toggleMenu}
                />
              </li>
              <li>
                <CustomLink
                  type="Contacto"
                  route="/contacto"
                  variant="menu"
                  onClick={toggleMenu}
                />
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
}
