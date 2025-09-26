import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Cabecalho from "./componentes/Cabecalho/Cabecalho"
import Home from "./pages/Home/Home"
import Lembrete from "./pages/Home/Lembrete/Lembrete"
import Faq from "./pages/Home/Faq/Faq"
import Checklist from "./pages/Home/Checklist/Checklist"
import Integrantes from "./pages/Home/Integrantes/Integrantes"
import Formulario from "./pages/Home/Formulario/Formulario"
import Contato from "./pages/Home/Contato/Contato"
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
        <Route path="/home" element={<Home />}/>
        <Route path="/lembrete" element={<Lembrete />}/>
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
