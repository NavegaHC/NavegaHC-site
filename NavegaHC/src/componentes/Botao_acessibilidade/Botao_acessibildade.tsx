import { useState, useEffect } from "react";

const ControleFonte: React.FC = () => {
  const [fontSize, setFontSize] = useState<number>(16);
  const [mostrar, setMostrar] = useState<boolean>(false);

  const aumentarFonte = () => {
    if (fontSize < 30) setFontSize((prev) => prev + 2);
  };

  const diminuirFonte = () => {
    if (fontSize > 10) setFontSize((prev) => prev - 2);
  };

  // aplica o tamanho da fonte em TODO o body
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2">

      <button
        onClick={() => setMostrar((prev) => !prev)}
        className="fixed bottom-2 left-4 p-2 rounded-full"
      >
      <img src="/img/acessibilidade.png" alt="botão de acessibilidade" className="h-10 w-10 " />
      </button>

      {mostrar && (
        <div className="mt-2 flex gap-2 bg-white p-1 rounded-lg shadow-md z-10">
          <button
            onClick={aumentarFonte}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            A+
          </button>
          <button
            onClick={diminuirFonte}
            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          >
            A-
          </button>
        </div>
      )}
    </div>
  );
};

export default ControleFonte;
