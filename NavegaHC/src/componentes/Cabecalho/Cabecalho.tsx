import { useState } from "react";
import { Link } from "react-router-dom";

function Cabecalho() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/lembrete", label: "Lembrete" },
    { to: "/faq", label: "FAQ" },
    { to: "/checklist", label: "Checklist" },
    { to: "/integrantes", label: "Integrantes" },
    { to: "/form", label: "Formulário" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <>
    <header className="bg-[#cecaca] shadow-md">
      <div className="w-full mx-auto flex justify-between items-center p-4">
        <img
          src="public/img/logonhc.png"
          alt="Logo NavegaHC"
          className="h-32.5 w-50 sm:h-24 sm:w-48"
        />

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-8 p-4 text-[#092d5c] font-bold text-xl">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:bg-gray-100 rounded-xl p-2.5 hover:text-blue-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão hambúrguer para mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between h-6 w-8"
          >
            <span
              className={`block h-0.5 w-full bg-[#092d5c] transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-[#092d5c] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-[#092d5c] transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-[#d9d9d9] w-full flex flex-col items-center gap-4 py-6 text-[#092d5c] font-bold text-4xl h-full">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
    </>
  );
}
export default Cabecalho;