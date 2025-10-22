import { useState } from "react";
import { Link } from "react-router-dom";

interface NavLink {
  to: string;
  label: string;
}

const Cabecalho: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const links: NavLink[] = [
    { to: "/", label: "Home" },
    { to: "/lembrete", label: "Lembrete" },
    { to: "/faq", label: "FAQ" },
    { to: "/checklist", label: "Checklist" },
    { to: "/integrantes", label: "Integrantes" },
    { to: "/form", label: "Formulário" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <header className="bg-[#cecaca] shadow-md">
      <div className="w-full mx-auto flex justify-between items-center p-4">
        <img
          src="/img/logonhc.png"
          alt="Logo NavegaHC"
          className="h-26 w-43"
        />

        {/* menu para telas maiores */}
        <nav className="hidden lg:flex gap-8 p-4 text-[#092d5c] font-bold text-xl">
          {links.map((link: NavLink) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:bg-gray-100 rounded-xl px-4 py-2 hover:text-blue-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* botão hamburguer */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between h-6 w-7"
          >
            <span
              className={`block h-1 w-full bg-[#092d5c] transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-[#092d5c] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block h-1 w-full bg-[#092d5c] transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* menu mobile */}
      {menuOpen && (
        <nav className="lg:hidden bg-[#d9d9d9] w-full flex flex-col items-center gap-4 py-6 text-[#092d5c] font-bold text-[1.5rem]">
          {links.map((link: NavLink) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="hover:bg-gray-100 rounded-xl px-4 py-2 hover:text-blue-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Cabecalho;
