import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-8 bg-gray-800 w-full h-20 text-2xl text-white">
      <Link to="/">Animythos</Link>

      <div>
        <Link to="/components">Components</Link>
      </div>
    </nav>
  );
}

export default Navbar;