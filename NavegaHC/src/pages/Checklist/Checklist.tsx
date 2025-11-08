import { useState, useEffect } from "react";

interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
  categoria?: string;
}

export default function Checklist() {
  const [items, setItems] = useState<ChecklistItem[]>([
    {
      id: "local",
      label: "Escolha um local/lugar bem iluminado e silencioso.",
      checked: false,
      categoria: "Ambiente"
    },
    {
      id: "movimentacao",
      label: "Certifique-se de que esteja num lugar que tenha espaço para movimentação.",
      checked: false,
      categoria: "Ambiente"
    },
    {
      id: "cadeira",
      label: "Tenha uma cadeira ou colchonete, caso necessário.",
      checked: false,
      categoria: "Equipamentos"
    },
    {
      id: "cammic",
      label: "Certifique-se se sua câmera e microfone estão funcionando.",
      checked: false,
      categoria: "Tecnologia"
    },
    {
      id: "internet",
      label: "Esteja num local onde saiba que sua internet estará estável.",
      checked: false,
      categoria: "Tecnologia"
    },
    {
      id: "roupas",
      label: "Use roupas confortáveis para os exercícios.",
      checked: false,
      categoria: "Pessoal"
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('checklistFisioterapia');
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('checklistFisioterapia', JSON.stringify(items));
    
    const todosMarcados = items.every(item => item.checked);
    if (todosMarcados && items.length > 0) {
      setShowModal(true);
    }
  }, [items]);

  const handleChange = (id: string) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const checkAll = () => {
    setItems(prev => prev.map(item => ({ ...item, checked: true })));
  };

  const uncheckAll = () => {
    setItems(prev => prev.map(item => ({ ...item, checked: false })));
    setShowModal(false);
  };

  const itemsPorCategoria = items.reduce((acc, item) => {
    const categoria = item.categoria || "Geral";
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(item);
    return acc;
  }, {} as Record<string, ChecklistItem[]>);

  return (
    <main className="min-h-screen bg-gray-200 rounded-2xl  py-8 px-4">
      <div className="max-w-2xl mx-auto">
        
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#092d5c] mb-4">
            Checklist para sua Consulta de Fisioterapia 
          </h1>
          <p className="text-gray-600 mb-4">
            Prepare-se para sua consulta online do IMREA
          </p>

          <div className="flex gap-2 justify-center">
            <button
              onClick={checkAll}
              className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition text-sm"
            >
              Marcar Todos
            </button>
            <button
              onClick={uncheckAll}
              className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition text-sm"
            >
              Desmarcar Todos
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {Object.entries(itemsPorCategoria).map(([categoria, categoriaItems]) => (
            <div key={categoria} className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-bold text-[#092d5c] mb-4 border-b pb-2">
                {categoria}
              </h2>
              
              <div className="space-y-3">
                {categoriaItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                    <input
                      type="checkbox"
                      id={item.id}
                      checked={item.checked}
                      onChange={() => handleChange(item.id)}
                      className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500"
                    />
                    <label 
                      htmlFor={item.id}
                      className={`flex-1 cursor-pointer ${item.checked ? 'text-gray-500 line-through' : 'text-gray-800'}`}
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-gray-100 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 text-center animate-fadeIn">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">
                Checklist Concluído!
              </h2>
              <p className="text-gray-600 mb-6">
                Você está preparado para sua consulta de fisioterapia!
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-[#092d5c] text-white font-bold py-3 rounded-lg hover:bg-[#0a3a7a] transition"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}