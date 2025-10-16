import { useMenu } from "../../context/context-menu";
import "./styles-overlay.css";

export function Overlay({ variant = "cover" }) {
  const { menuOpen, closing, closeMenu } = useMenu();

  if (!menuOpen && !closing) return null;

  const handleClick = () => {
    closeMenu();
  };

  return (
    <div
      className={`overlay overlay-${variant} ${closing ? "closing" : ""}`}
      onClick={handleClick}
    />
  );
}
