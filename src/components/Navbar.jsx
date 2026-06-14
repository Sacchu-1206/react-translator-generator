import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex gap-6 justify-center">
        <Link to="/">Home</Link>
        <Link to="/translator">Translator</Link>
        <Link to="/generator">Generator</Link>
      </div>
    </nav>
  );
}

export default Navbar;