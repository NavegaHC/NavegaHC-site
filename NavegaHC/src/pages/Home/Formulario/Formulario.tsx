import { useState } from "react";

export default function FormularioPage() {
  const [mensagem, setMensagem] = useState("");

  const mostrarMensagem = (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem("✅ Formulário enviado com sucesso!");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 px-4">
      <section className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Formulário NavegaHC
        </h2>

        {mensagem && (
          <div className="mb-6 p-3 text-green-800 bg-green-100 border border-green-300 rounded-lg text-center">
            {mensagem}
          </div>
        )}

        <form className="space-y-6" onSubmit={mostrarMensagem}>
          {/* Usuário */}
          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold text-gray-700">Usuário</legend>
            <label htmlFor="nome" className="block mt-2 font-medium">
              Informe seu nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="idade" className="block mt-4 font-medium">
              Informe sua idade:
            </label>
            <input
              type="number"
              id="idade"
              name="idade"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          {/* Dispositivo */}
          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold text-gray-700">Dispositivo Acesso</legend>
            <label htmlFor="dispositivo" className="block mt-2 font-medium">
              Tipo de dispositivo:
            </label>
            <input
              type="text"
              id="dispositivo"
              name="dispositivo"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="sistema" className="block mt-4 font-medium">
              Sistema do dispositivo:
            </label>
            <input
              type="text"
              id="sistema"
              name="sistema"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          {/* Feedback */}
          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold text-gray-700">Feedback</legend>
            <label htmlFor="experiencia" className="block mt-2 font-medium">
              Como foi sua experiência?
            </label>
            <input
              type="text"
              id="experiencia"
              name="experiencia"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="sugestao" className="block mt-4 font-medium">
              Sugestão de melhoria:
            </label>
            <input
              type="text"
              id="sugestao"
              name="sugestao"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          {/* Dificuldade */}
          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold text-gray-700">Dificuldade</legend>
            <label htmlFor="infoDificuldade" className="block mt-2 font-medium">
              Tipo de dificuldade:
            </label>
            <input
              type="text"
              id="infoDificuldade"
              name="infoDificuldade"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="ds-dificuldade" className="block mt-4 font-medium">
              Descreva a dificuldade:
            </label>
            <input
              type="text"
              id="ds-dificuldade"
              name="ds-dificuldade"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          {/* Pergunta Principal */}
          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold text-gray-700">Pergunta Principal</legend>
            <label htmlFor="perg-princ" className="block mt-2 font-medium">
              Você gostou do site NavegaHC?
            </label>
            <input
              type="text"
              id="perg-princ"
              name="perg-princ"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          {/* Tempo de Uso */}
          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold text-gray-700">Tempo de Uso</legend>
            <label htmlFor="tempo" className="block mt-2 font-medium">
              Há quanto tempo você conhece ou usa o site?
            </label>
            <input
              type="text"
              id="tempo"
              name="tempo"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />

            <label htmlFor="frequencia" className="block mt-4 font-medium">
              Com que frequência você utiliza o site?
            </label>
            <input
              type="text"
              id="frequencia"
              name="frequencia"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          {/* Avaliação */}
          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold text-gray-700">Avaliação</legend>
            <label htmlFor="avaliacao" className="block mt-2 font-medium">
              Avaliação (1 a 5):
            </label>
            <input
              type="number"
              id="avaliacao"
              name="avaliacao"
              min="1"
              max="5"
              step="0.1"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </fieldset>

          {/* Informações */}
          <fieldset className="border border-gray-300 rounded-lg p-4">
            <legend className="text-lg font-semibold text-gray-700">Informações do Formulário</legend>
            <p className="text-gray-600">
              Este é um Formulário de Feedback sobre o site NavegaHC, que tem como objetivo recolher
              informações para o melhor desenvolvimento do site.
            </p>
          </fieldset>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
