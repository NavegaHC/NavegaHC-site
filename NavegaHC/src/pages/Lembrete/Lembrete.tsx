import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
 
interface Lembrete {
  id: string;
  nome: string;
  telefone: string;
  dia: string;
  hora: string;
  dataCriacao: string;
  notificado: boolean;
}
 
export default function LembreteCompleto() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    dia: "",
    hora: "",
  });
 
  const [modalOpen, setModalOpen] = useState(false);
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);
  const [lembreteCriado, setLembreteCriado] = useState<Lembrete | null>(null);
  const navigate = useNavigate();
 
  useEffect(() => {
    const lembretesSalvos = localStorage.getItem("lembretesConsulta");
    if (lembretesSalvos) {
      setLembretes(JSON.parse(lembretesSalvos));
    }
  }, []);
 
  useEffect(() => {
    localStorage.setItem("lembretesConsulta", JSON.stringify(lembretes));
  }, [lembretes]);
 
  useEffect(() => {
    const verificarLembretesHoje = () => {
      const hoje = new Date().toISOString().split('T')[0];
      const lembretesHoje = lembretes.filter(
        lembrete => lembrete.dia === hoje && !lembrete.notificado
      );
 
      if (lembretesHoje.length > 0) {
        alert(`Você tem ${lembretesHoje.length} consulta(s) marcada(s) para hoje!`);
       
        setLembretes(prev => prev.map(lembrete =>
          lembrete.dia === hoje
            ? { ...lembrete, notificado: true }
            : lembrete
        ));
      }
    };
 
    verificarLembretesHoje();
 
    const interval = setInterval(verificarLembretesHoje, 60 * 60 * 1000);
 
    return () => clearInterval(interval);
  }, [lembretes]);
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    const novoLembrete: Lembrete = {
      id: Date.now().toString(),
      nome: form.nome,
      telefone: form.telefone,
      dia: form.dia,
      hora: form.hora,
      dataCriacao: new Date().toLocaleDateString('pt-BR'),
      notificado: false
    };
 
    setLembretes(prev => [novoLembrete, ...prev]);
    setLembreteCriado(novoLembrete);
    setModalOpen(true);
    setForm({ nome: "", telefone: "", dia: "", hora: "" });
  };
 
  const verMeusLembretes = () => {
    navigate('/lembretes-salvos');
  };
 
  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };
 
  const formatarHora = (hora: string) => {
    return hora.substring(0, 5);
  };
 
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-200 rounded-2xl">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
        <div className="flex justify-center">
          <img
            src="/img/menina_lembrete.png"
            alt="Ilustração de menina usando celular"
            className="w-64 md:w-80 lg:w-96 drop-shadow-lg"
          />
        </div>
 
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md mx-auto">
          <h1 className="text-[1.875rem] font-bold text-center mb-6 text-[#092d5c]">
            Criar Lembrete
          </h1>
 
          {lembretes.length > 0 && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg text-center">
              <p className="text-sm text-blue-800">
                Você tem <strong>{lembretes.length}</strong> lembrete(s) salvo(s)
              </p>
            </div>
          )}
 
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nome" className="block font-medium text-gray-700">
                Nome Completo:
              </label>
              <input
                type="text"
                name="nome"
                id="nome"
                value={form.nome}
                onChange={handleChange}
                required
                className="mt-1 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Seu nome completo"
              />
            </div>
 
            <div>
              <label htmlFor="telefone" className="block font-medium text-gray-700">
                Número (Telefone):
              </label>
              <input
                type="tel"
                name="telefone"
                id="telefone"
                value={form.telefone}
                onChange={handleChange}
                required
                className="mt-1 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="(11) 99999-9999"
              />
            </div>
 
            <div>
              <label htmlFor="dia" className="block font-medium text-gray-700">
                Dia da consulta:
              </label>
              <input
                type="date"
                name="dia"
                id="dia"
                value={form.dia}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="mt-1 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
 
            <div>
              <label htmlFor="hora" className="block font-medium text-gray-700">
                Hora da consulta:
              </label>
              <input
                type="time"
                name="hora"
                id="hora"
                value={form.hora}
                onChange={handleChange}
                required
                className="mt-1 w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
 
            <button
              type="submit"
              className="flex justify-center w-3/4 mx-auto bg-[#092d5c] text-white font-bold py-2 rounded-lg hover:bg-blue-900 transition shadow-md"
            >
              Salvar Lembrete
            </button>
          </form>
 
          {lembretes.length > 0 && (
            <button
              onClick={verMeusLembretes}
              className="w-full mt-4 bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-700 transition shadow-md"
            >
              Ver Meus Lembretes ({lembretes.length})
            </button>
          )}
        </div>
      </div>
 
      {modalOpen && lembreteCriado && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center animate-fadeIn">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-xl font-bold text-green-700 mb-2">
              Lembrete criado com sucesso!
            </h2>
           
            <div className="text-left bg-gray-50 p-4 rounded-lg mb-4">
              <p><strong>Nome:</strong> {lembreteCriado.nome}</p>
              <p><strong>Telefone:</strong> {lembreteCriado.telefone}</p>
              <p><strong>Data:</strong> {formatarData(lembreteCriado.dia)}</p>
              <p><strong>Hora:</strong> {formatarHora(lembreteCriado.hora)}</p>
            </div>
 
            <div className="flex gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="flex-1 bg-[#092d5c] text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-900 transition"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  setModalOpen(false);
                  setForm({ nome: "", telefone: "", dia: "", hora: "" });
                }}
                className="flex-1 bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Novo Lembrete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}