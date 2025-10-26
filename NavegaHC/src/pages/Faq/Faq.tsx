import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface FAQItemProps {
  title: string;
  question: string;
  answer: string;
  question2: string;
  answer2: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ title, question, answer, question2, answer2 }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="mb-4 bg-white rounded-2xl shadow-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-[#092d5c] p-4 hover:bg-[#0a3a7a] focus:outline-none transition-colors"
      >
        <span className="font-bold text-[1.125rem] text-left text-white">{title}</span>
        <span
          className={`ml-2 transform transition-transform duration-300 text-white ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="p-4 space-y-4 text-gray-700">
          <div className="border-b border-gray-200 pb-3">
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">{question}</h3>
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">{question2}</h3>
            <p className="text-gray-600 leading-relaxed">{answer2}</p>
          </div>
        </div>
      )}
    </div>
  );
};

interface FAQData {
  title: string;
  question: string;
  answer: string;
  question2: string;
  answer2: string;
}

export default function FAQ() {
  const navigate = useNavigate();
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("");
  const [faqVisits, setFaqVisits] = useState<number>(0);

  useEffect(() => {
    const visits = localStorage.getItem('faqVisits');
    const count = visits ? parseInt(visits) + 1 : 1;
    setFaqVisits(count);
    localStorage.setItem('faqVisits', count.toString());
  }, []);

  const faqs: FAQData[] = [
    {
      title: "Técnica",
      question: "1. A câmera não está funcionando, o que faço?",
      answer: "Veja se a câmera está liberada. Quando o site pedir, clique em Permitir. Se não aparecer nada, peça ajuda para alguém atualizar o computador ou o celular.",
      question2: "2. Posso usar o celular para a consulta?",
      answer2: "Sim! Você pode usar o celular, tablet ou computador. Só precisa ter câmera, microfone e internet funcionando.",
    },
    {
      title: "Acessibilidade",
      question: "1. Tem tradução em Libras na plataforma?",
      answer: "Ainda não tem, mas estamos trabalhando para colocar isso em breve.",
      question2: "2. Dá para aumentar o tamanho das letras?",
      answer2: "Sim! Você pode aumetar ou diminuir a fonte do site clicando no botão de acessibilidade no canto inferior esquerdo da página que lhe dará as opções de aumentar ou diminuir as letras",
    },
    {
      title: "Agendamento",
      question: "1. Como cancelo uma consulta?",
      answer: "Você precisa falar direto com a unidade do IMREA que marcou sua consulta.",
      question2: "2. E se eu me atrasar para a consulta?",
      answer2: "Tente entrar mesmo assim. Se não conseguir, fale com a unidade para saber o que fazer.",
    },
    {
      title: "Consulta",
      question: "1. Quanto tempo dura a consulta online?",
      answer: "A consulta dura mais ou menos 30 minutos. Pode ser mais ou menos, dependendo do seu caso.",
      question2: "2. Preciso estar com alguém na hora da consulta?",
      answer2: "Se for difícil para você andar ou se comunicar, é bom ter alguém junto para ajudar.",
    },
    {
      title: "Segurança",
      question: "1. Quem pode ver meus dados?",
      answer: "Só profissionais do IMREA, e tudo segue a lei de proteção de dados.",
      question2: "2. É seguro clicar no link da consulta que chega por e-mail?",
      answer2: "Sim, se o e-mail for mesmo do IMREA. Sempre veja quem mandou antes de clicar.",
    },
    {
      title: "Institucional",
      question: "1. O que é o IMREA?",
      answer: "É um instituto do Hospital das Clínicas que cuida da reabilitação de pacientes.",
      question2: "2. Quais lugares fazem parte do IMREA?",
      answer2: "Clínicas, Aclimação, Vila Mariana, Lapa e outros locais. Veja mais na parte de contatos.",
    },
  ];

  const handleVoltarHome = () => {
    navigate("/");
  };

  const handleLimparCategoria = () => {
    setCategoriaAtiva("");
  };

  const faqAtiva = faqs.find(faq => faq.title === categoriaAtiva);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#092d5c] mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Encontre respostas para as dúvidas mais comuns sobre o NavegaHC
          </p>
          
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            Esta página foi visitada {faqVisits} vezes
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => setCategoriaAtiva(faq.title)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                categoriaAtiva === faq.title
                  ? "bg-[#092d5c] text-white shadow-lg"
                  : "bg-white text-[#092d5c] border border-[#092d5c] hover:bg-[#092d5c] hover:text-white"
              }`}
            >
              {faq.title}
            </button>
          ))}
        </div>

        {categoriaAtiva && (
          <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#092d5c]">
                {categoriaAtiva}
              </h2>
              <button
                onClick={handleLimparCategoria}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors text-sm"
              >
                Ver Todas as Categorias
              </button>
            </div>
            
            {faqAtiva && (
              <FAQItem
                title={faqAtiva.title}
                question={faqAtiva.question}
                answer={faqAtiva.answer}
                question2={faqAtiva.question2}
                answer2={faqAtiva.answer2}
              />
            )}
          </div>
        )}

        {!categoriaAtiva && (
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-center text-[#092d5c] mb-6">
              Todas as Perguntas
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  title={faq.title}
                  question={faq.question}
                  answer={faq.answer}
                  question2={faq.question2}
                  answer2={faq.answer2}
                />
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <button
            onClick={handleVoltarHome}
            className="bg-[#092d5c] text-white px-8 py-3 rounded-lg hover:bg-[#0a3a7a] transition-colors font-semibold shadow-lg"
          >
            ← Voltar para Home
          </button>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Não encontrou o que procurava? Entre em contato conosco!</p>
        </div>
      </div>
    </div>
  );
}