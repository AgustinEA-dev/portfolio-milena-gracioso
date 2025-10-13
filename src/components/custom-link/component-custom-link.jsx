import { Link } from "react-router-dom";

export function CustomLink({ type, route, variant, onClick }) {
  return (
    <Link className={`custom-link ${variant}`} to={route} onClick={onClick}>
      {type}
    </Link>
  );
}
