import { Link } from "react-router-dom";

export function CustomLink({ type, route }) {
  return (
    <Link className="link-contact" to={route}>
      {type}
    </Link>
  );
}
