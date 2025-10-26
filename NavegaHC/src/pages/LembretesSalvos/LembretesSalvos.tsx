import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

interface Lembrete {
  id: string;
  nome: string;
  telefone: string;
  dia: string;
  hora: string;
  dataCriacao: string;
  notificado: boolean;
}

export default function LembretesSalvos() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);
  const [filtro, setFiltro] = useState<'todos' | 'hoje' | 'futuros'>('todos');
  const navigate = useNavigate();

  useEffect(() => {
    const lembretesSalvos = localStorage.getItem("lembretesConsulta");
    if (lembretesSalvos) {
      setLembretes(JSON.parse(lembretesSalvos));
    }
  }, []);

  const removerLembrete = (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este lembrete?")) {
      const novosLembretes = lembretes.filter(lembrete => lembrete.id !== id);
      setLembretes(novosLembretes);
      localStorage.setItem("lembretesConsulta", JSON.stringify(novosLembretes));
    }
  };

  const limparTodosLembretes = () => {
    if (window.confirm("Tem certeza que deseja excluir TODOS os lembretes?")) {
      setLembretes([]);
      localStorage.removeItem("lembretesConsulta");
    }
  };

  const lembretesFiltrados = lembretes.filter(lembrete => {
    const hoje = new Date().toISOString().split('T')[0];
    const dataLembrete = lembrete.dia;

    if (filtro === 'hoje') return dataLembrete === hoje;
    if (filtro === 'futuros') return dataLembrete >= hoje;
    return true;
  });

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  const formatarHora = (hora: string) => {
    return hora.substring(0, 5);
  };

  const eHoje = (data: string) => {
    const hoje = new Date().toISOString().split('T')[0];
    return data === hoje;
  };

  const eFuturo = (data: string) => {
    const hoje = new Date().toISOString().split('T')[0];
    return data > hoje;
  };

  if (lembretes.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-200">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-[#092d5c] mb-4">
            Nenhum Lembrete Salvo
          </h1>
          <p className="text-gray-600 mb-6">
            Você ainda não criou nenhum lembrete de consulta.
          </p>
          <button
            onClick={() => navigate("/lembrete")}
            className="bg-[#092d5c] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition shadow-md w-full"
          >
            Criar Primeiro Lembrete
          </button>
          <Link
            to="/"
            className="block mt-4 text-[#092d5c] hover:text-blue-900 font-medium"
          >
            ← Voltar para Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#092d5c]">
                Meus Lembretes
              </h1>
              <p className="text-gray-600">
                {lembretes.length} lembrete(s) salvo(s)
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate("/lembrete")}
                className="bg-[#092d5c] text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-900 transition shadow-md"
              >
                + Novo Lembrete
              </button>
              <button
                onClick={limparTodosLembretes}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition shadow-md"
              >
                x Limpar Todos
              </button>
            </div>
          </div>

          <div className="flex gap-2 mt-4 flex-wrap">
            <button
              onClick={() => setFiltro('todos')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filtro === 'todos' 
                  ? 'bg-[#092d5c] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos ({lembretes.length})
            </button>
            <button
              onClick={() => setFiltro('hoje')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filtro === 'hoje' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hoje ({lembretes.filter(l => eHoje(l.dia)).length})
            </button>
            <button
              onClick={() => setFiltro('futuros')}
              className={`px-4 py-2 rounded-lg font-medium ${
                filtro === 'futuros' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Futuros ({lembretes.filter(l => eFuturo(l.dia)).length})
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {lembretesFiltrados.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                Nenhum lembrete encontrado
              </h2>
              <p className="text-gray-600">
                Tente mudar o filtro ou criar um novo lembrete.
              </p>
            </div>
          ) : (
            lembretesFiltrados.map((lembrete) => (
              <div
                key={lembrete.id}
                className={`bg-white rounded-2xl shadow-xl p-6 border-l-4 ${
                  eHoje(lembrete.dia)
                    ? 'border-green-500 bg-green-50'
                    : eFuturo(lembrete.dia)
                    ? 'border-blue-500'
                    : 'border-gray-400 opacity-70'
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#092d5c]">
                        {lembrete.nome}
                      </h3>
                      {eHoje(lembrete.dia) && (
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                         Hoje!
                        </span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-semibold">Telefone:</span>
                        <p>{lembrete.telefone}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Data:</span>
                        <p>{formatarData(lembrete.dia)}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Hora:</span>
                        <p>{formatarHora(lembrete.hora)}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Criado em:</span>
                        <p>{lembrete.dataCriacao}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => removerLembrete(lembrete.id)}
                      className="bg-red-100 text-red-700 font-bold py-2 px-4 rounded-lg hover:bg-red-200 transition"
                      title="Excluir lembrete"
                    > x
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-[#092d5c] hover:text-blue-900 font-medium"
          >
            ← Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}