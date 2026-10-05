import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex h-20 w-full items-center justify-center gap-8 border-b border-white/10 bg-black/30 text-xl text-white backdrop-blur-md">
      <Link to="/" className="font-semibold transition hover:text-violet-300">
        Animythos
      </Link>

      <Link to="/components" className="text-white/80 transition hover:text-violet-300">
        Components
      </Link>
    </nav>
  );
}

export default Navbar;