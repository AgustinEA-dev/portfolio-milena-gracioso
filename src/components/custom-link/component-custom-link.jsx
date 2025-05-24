import { Link } from "react-router-dom";

export function CustomLink({ type, route, variant }) {
  return (
    <Link className={`custom-link ${variant}`} to={route}>
      {type}
    </Link>
  );
}
