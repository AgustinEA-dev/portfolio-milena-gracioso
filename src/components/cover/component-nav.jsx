import { useState } from "react";

import { CustomLink } from "../custom-link/component-custom-link";

import HamburgerIcon from "../icons/component-bars-icon";

import "./styles-nav.css";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header>
      <nav>
        <span>Milena Gracioso</span>
        <button onClick={toggleMenu} aria-expanded={open} aria-label="menu">
          <HamburgerIcon classname="bars" />
        </button>
        {open && (
          <ul className="dropdown-menu">
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
      </nav>
    </header>
  );
}
