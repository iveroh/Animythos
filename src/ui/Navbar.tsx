import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Animythos</Link>

      <div>
        <Link to="/components">Components</Link>
      </div>
    </nav>
  );
}

export default Navbar;