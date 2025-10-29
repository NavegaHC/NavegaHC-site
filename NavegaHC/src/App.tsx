import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Cabecalho from "./componentes/Cabecalho/Cabecalho"
import Home from "./pages/Home/Home"
import Lembrete from "./pages/Lembrete/Lembrete"
import LembretesSalvos from "./pages/LembretesSalvos/LembretesSalvos"
import Faq from "./pages/Faq/Faq"
import Checklist from "./pages/Checklist/Checklist"
import Integrantes from "./pages/Integrantes/Integrantes"
import Formulario from "./pages/Formulario/Formulario"
import Contato from "./pages/Contato/Contato"
import Botao_chat from "./componentes/Botao_chat/Botao_chat"
import Botao_acessibilidade from "./componentes/Botao_acessibilidade/Botao_acessibildade"
import Footer from "./componentes/Footer/Footer"

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col bg-[#d9d9d9]">
    <BrowserRouter>
    <Cabecalho />
    <main className="p-4">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/lembrete" element={<Lembrete />}/>
        <Route path="/lembrete/editar/:id" element={<Lembrete />}/>
        <Route path="/lembretessalvos" element={<LembretesSalvos />} />
        <Route path="/lembretessalvos/:filtro" element={<LembretesSalvos />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/form" element={<Formulario />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </main>
    </BrowserRouter>
    <Botao_acessibilidade />
    <Botao_chat />
    <Footer />
    </div>
    </>
  )
}

export default App
