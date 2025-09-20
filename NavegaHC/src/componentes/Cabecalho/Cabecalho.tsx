import { Link } from "react-router-dom"

function Cabecalho(){
    return(
        <>
            <header className="bg-[#cecaca] text-white p-0">
                <div className="flex justify-between items-center">
                    <img src="public/img/logonhc.png" alt="Logo NavegaHC" className="p-2 h-[130px] w-[200px]"></img>
                    <nav className="flex gap-7 p-4 text-[#09a870]">
                        <Link to="/home" className="hover:text-[#000] font-bold">Home</Link>
                        <Link to="/lembrete" className=" hover:text-[#000] font-bold">Lembrete</Link>
                        <Link to="/faq" className="hover:text-[#000] font-bold">FAQ</Link>
                        <Link to="/checklist" className="hover:text-[#000] font-bold">Checklist</Link>
                        <Link to="/integrantes" className="hover:text-[#000] font-bold">Integrantes</Link>
                        <Link to="/form" className="hover:text-[#000] font-bold">Formulário</Link>
                        <Link to="/contato" className="hover:text-[#000] font-bold">Contato</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Cabecalho;