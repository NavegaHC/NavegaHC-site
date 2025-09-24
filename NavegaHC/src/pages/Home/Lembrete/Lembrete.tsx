import { useState } from "react";

export default function LembreteCompleto() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    dia: "",
    hora: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true); 
    setForm({ nome: "", telefone: "", dia: "", hora: "" });
    setTimeout(() => setSuccess(false), 8000); 
  };

  return (
    <main className="w-full grid md:grid-cols-2 gap-10 items-center">
      <div className="flex justify-center">
          <img
            src="/img/menina_lembrete.png"
            alt="Ilustração de menina usando ceular"
            className="max-w-xs md:max-w-md rounded-2xl"
          />
        </div>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#092d5c]">Criar Lembrete</h1>

        {success && (
          <div className="text-center text-green-800 font-bold mb-4 p-2 border border-green-800 rounded">
            ✅ Lembrete criado com sucesso!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nome" className="block font-medium">
              Nome Completo:
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block font-medium">
              Número (Telefone):
            </label>
            <input
              type="tel"
              name="telefone"
              id="telefone"
              value={form.telefone}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="dia" className="block font-medium">
              Dia da consulta:
            </label>
            <input
              type="date"
              name="dia"
              id="dia"
              value={form.dia}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="hora" className="block font-medium">
              Hora da consulta:
            </label>
            <input
              type="time"
              name="hora"
              id="hora"
              value={form.hora}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="flex justify-center w-3/4 mx-auto bg-[#092d5c] text-white text-center font-bold py-2 rounded hover:bg-blue-900 transition"
          >
            Salvar Lembrete
          </button>
        </form>
      </div>
    </main>
  );
}
