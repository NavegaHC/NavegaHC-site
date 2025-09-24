import { useState } from "react";

export default function Checklist() {
  const [checkedItems, setCheckedItems] = useState({
    Local: false,
    Movimentacao: false,
    Cadeira: false,
    CamMic: false,
    Internet: false,
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const updated = { ...checkedItems, [name]: checked };
    setCheckedItems(updated);

    // abre modal quando todos forem true
    const allChecked = Object.values(updated).every(Boolean);
    if (allChecked) {
      setShowModal(true);
    }
  };

  return (
    <main
      id="checklist"
      className="flex flex-col min-h-screen items-center justify-center bg-gray-200 rounded-2xl p-6"
    >
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-[#092d5c]">
          Checklist para sua Consulta de Fisioterapia - IMREA
        </h1>

        <form className="space-y-4">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="Local"
              id="Local"
              checked={checkedItems.Local}
              onChange={handleChange}
              className="mt-1 h-5 w-5 text-blue-600"
            />
            <label htmlFor="Local">
              Escolha um local bem iluminado e silencioso.
            </label>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="Movimentacao"
              id="Movimentacao"
              checked={checkedItems.Movimentacao}
              onChange={handleChange}
              className="mt-1 h-5 w-5 text-blue-600"
            />
            <label htmlFor="Movimentacao">
              Certifique-se de que há espaço para movimentação.
            </label>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="Cadeira"
              id="Cadeira"
              checked={checkedItems.Cadeira}
              onChange={handleChange}
              className="mt-1 h-5 w-5 text-blue-600"
            />
            <label htmlFor="Cadeira">
              Tenha uma cadeira ou colchonete, conforme necessário.
            </label>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="CamMic"
              id="CamMic"
              checked={checkedItems.CamMic}
              onChange={handleChange}
              className="mt-1 h-5 w-5 text-blue-600"
            />
            <label htmlFor="CamMic">
              Verifique se sua câmera e microfone estão funcionando.
            </label>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="Internet"
              id="Internet"
              checked={checkedItems.Internet}
              onChange={handleChange}
              className="mt-1 h-5 w-5 text-blue-600"
            />
            <label htmlFor="Internet">
              Mantenha sua internet estável.
            </label>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-lg font-bold text-green-700 mb-4">
              ✔️ Checklist concluído!
            </h2>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-[#092d5c] text-white rounded hover:bg-blue-900 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
