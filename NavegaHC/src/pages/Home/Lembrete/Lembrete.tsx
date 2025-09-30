import { useState } from "react";

export default function LembreteCompleto() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    dia: "",
    hora: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true); 
    setForm({ nome: "", telefone: "", dia: "", hora: "" });
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
        </div>
      </div>


      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full text-center animate-fadeIn">
            <h2 className="text-xl font-bold text-green-700 mb-4">
              ✔️ Lembrete criado com sucesso!
            </h2>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-[#092d5c] text-white font-bold px-5 py-2 rounded-lg hover:bg-blue-900 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
