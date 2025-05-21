import HamburgerIcon from "../icons/component-bars-icon";

import "./styles-nav.css";

export function NavBar() {
  return (
    <header>
      <nav>
        <span>Milena Gracioso</span>
        <HamburgerIcon classname="bars" />
      </nav>
    </header>
  );
}
