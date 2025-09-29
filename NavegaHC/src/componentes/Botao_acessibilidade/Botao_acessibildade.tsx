import { useState } from "react";

const ControleFonte: React.FC = () => {
  const [fontSize, setFontSize] = useState<number>(16); // tamanho inicial da fonte tipado

  const aumentarFonte = (): void => {
    if (fontSize < 30) {
      setFontSize((prev) => prev + 2);
    }
  };

  const diminuirFonte = (): void => {
    if (fontSize > 10) {
      setFontSize((prev) => prev - 2);
    }
  };

  return (
    <div className="p-6 space-y-4">
      {/* Botões de controle */}
      <div className="flex gap-4">
        <button
          id="aumentarFonte"
          onClick={aumentarFonte}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Aumentar Fonte
        </button>

        <button
          id="diminuirFonte"
          onClick={diminuirFonte}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Diminuir Fonte
        </button>
      </div>

      {/* Conteúdo com fonte ajustável */}
      <div
        id="fundo"
        style={{ fontSize: `${fontSize}px` }}
        className="bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <p>
          Este é um parágrafo de exemplo onde você pode aumentar ou diminuir o
          tamanho da fonte.
        </p>
        <p>
          O controle de acessibilidade permite que pessoas ajustem o texto para
          melhor leitura.
        </p>
      </div>
    </div>
  );
};

export default ControleFonte;
