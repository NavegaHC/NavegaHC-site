import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Cabecalho from "./componentes/Cabecalho/Cabecalho"
import Home from "./pages/Home/Home"
import Lembrete from "./pages/Home/Lembrete/Lembrete"
import Faq from "./pages/Home/Faq/Faq"
import Checklist from "./pages/Home/Checklist/Checklist"
import Integrantes from "./pages/Home/Integrantes/Integrantes"
import Formulario from "./pages/Home/Formulario/Formulario"
import Contato from "./pages/Home/Contato/Contato"
import Footer from "./componentes/Cabecalho/Footer/Footer"

function App() {

  return (
    <>
    <div className="min-h-screen flex flex-col">
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
    <Footer />
    </div>
    </>
  )
}

export default App
