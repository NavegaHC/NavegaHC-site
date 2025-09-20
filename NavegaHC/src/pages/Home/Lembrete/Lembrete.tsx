import { useState } from "react";

const Lembrete = () => {
  const [nomeCompleto, setNome] = useState("");
  const [nomeExibido, setNomeExibido] = useState("");
  const [numTel, setTel] = useState("");
  const [numExibido, setNumExibido] = useState("");
  const [diaConsulta, setDia] = useState("");
  const [diaExibido, setDiaExibido] = useState("");
  const [horaConsulta, setHora] = useState("");
  const [horaExibido, setHoraExibido] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNomeExibido(nomeCompleto);
    setNome("");
    setNumExibido(numTel);
    setTel("");
    setDiaExibido(diaConsulta);
    setDia("");
    setHoraExibido(horaConsulta);
    setHora("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Lembrete
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">
              Nome Completo:
            </label>
            <input
              type="text"
              value={nomeCompleto}
              onChange={(e) => setNome(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Número (Telefone):
            </label>
            <input
              type="tel"
              value={numTel}
              onChange={(e) => setTel(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Dia da consulta:
            </label>
            <input
              type="date"
              value={diaConsulta}
              onChange={(e) => setDia(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Hora da consulta:
            </label>
            <input
              type="time"
              value={horaConsulta}
              onChange={(e) => setHora(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Salvar Lembrete
          </button>
        </form>

        <div className="mt-6 space-y-2 text-gray-800">
          {nomeExibido && (
            <p>
              <b>Nome digitado:</b> {nomeExibido}
            </p>
          )}
          {numExibido && (
            <p>
              <b>Telefone digitado:</b> {numExibido}
            </p>
          )}
          {diaExibido && (
            <p>
              <b>Dia digitado:</b> {diaExibido}
            </p>
          )}
          {horaExibido && (
            <p>
              <b>Horário digitado:</b> {horaExibido}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lembrete;
