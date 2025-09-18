import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Cabecalho from "./componentes/Cabecalho/Cabecalho"
import Home from "./pages/Home/Home"
import Lembrete from "./pages/Home/Lembrete/Lembrete"
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
      </Routes>
    </main>
    </BrowserRouter>
    <Footer />
    </div>
    </>
  )
}

export default App
