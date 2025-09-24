import { useState } from "react";

export default function Checklist() {
  const [checkedItems, setCheckedItems] = useState({
    Local: false,
    Movimentacao: false,
    Cadeira: false,
    CamMic: false,
    Internet: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckedItems((prev) => ({ ...prev, [name]: checked }));
  };

  const allChecked = Object.values(checkedItems).every(Boolean);

  return (
    <main id="checklist" className="flex flex-col min-h-screen rounded-2xl bg-gray-200">
      <div
        id="checklist-box"
        className="max-w-xl mx-auto justify-center mt-10 bg-white rounded-lg shadow-md p-6"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Checklist para sua Consulta de Fisioterapia - IMREA
        </h1>

        <form name="frmchecklist">
          <div className="space-y-4">
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
              <label htmlFor="Internet">Mantenha sua internet estável.</label>
            </div>
          </div>

          {allChecked && (
            <div
              id="message"
              className="mt-6 text-green-800 font-bold text-center"
            >
              ✔️ Checklist concluído!
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
