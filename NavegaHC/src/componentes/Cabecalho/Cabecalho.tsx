import { Link } from "react-router-dom"

function Cabecalho(){
    return(
        <>
            <header className="bg-[#cecaca] text-white p-0">
                <div className="flex justify-between items-center">
                    <img src="public/img/logonhc.png" alt="Logo NavegaHC" className="p-2 h-[130px] w-[200px]"></img>
                    <nav className="flex gap-4 p-2">
                        <Link to="/home" className="hover:text-gray-400">Home</Link>
                        <Link to="/lembrete" className="hover:text-gray-400">Lembrete</Link>
                        <Link to="/faq" className="hover:text-gray-400">FAQ</Link>
                        <Link to="/checklist" className="hover:text-gray-400">Checklist</Link>
                        <Link to="/integrantes" className="hover:text-gray-400">Integrantes</Link>
                        <Link to="/form" className="hover:text-gray-400">Formulário</Link>
                        <Link to="/contato" className="hover:text-gray-400">Contato</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Cabecalho;