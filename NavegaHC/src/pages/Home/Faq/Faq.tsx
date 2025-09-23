// src/components/FAQ.jsx
import { useState } from "react";

const FAQItem = ({ title, question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-gray-200 p-3 rounded-lg hover:bg-gray-300 focus:outline-none"
      >
        <span className="font-semibold text-left">{title}</span>
        <span
          className={`ml-2 transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {open && (
        <div className="mt-2 text-gray-700">
            <h1>{question}</h1>
            <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      title: "Técnica",
      question: "1. A câmera não está funcionando, o que faço?",
      answer: "Veja se a câmera está liberada. Quando o site pedir, clique em Permitir. Se não aparecer nada, peça ajuda para alguém atualizar o computador ou o celular.",
      question2: "2. Posso usar o celular para a consulta?",
      answer2: "Sim! Você pode usar o celular, tablet ou computador. Só precisa ter câmera, microfone e internet funcionando."
    },
    {
      title:"Acessibilidade",
      question: "1. Tem tradução em Libras na plataforma?",
      answer:"Ainda não tem, mas estamos trabalhando para colocar isso em breve.",
      question2:"2. Dá para aumentar o tamanho das letras?",
      answer2:"Sim! Você pode usar o zoom do navegador para deixar tudo maior e mais fácil de ler."
    },
    {
        title:"Agendamento",
        question: "1. Como cancelo uma consulta?",
        answer:"Você precisa falar direto com a unidade do IMREA que marcou sua consulta.",
        question2:"2. E se eu me atrasar para a consulta?",
        answer2:"Tente entrar mesmo assim. Se não conseguir, fale com a unidade para saber o que fazer."
    },
    {
        title:"Consulta",
        question: "1. Quanto tempo dura a consulta online?",
        answer:"A consulta dura mais ou menos 30 minutos. Pode ser mais ou menos, dependendo do seu caso.",
        question2:"2. Preciso estar com alguém na hora da consulta?",
        answer2:"Se for difícil para você andar ou se comunicar, é bom ter alguém junto para ajudar."
    },
    {
        title:"Segurança",
        question: "1. Quem pode ver meus dados?",
        answer:"Só profissionais do IMREA, e tudo segue a lei de proteção de dados.",
        question2:"2. É seguro clicar no link da consulta que chega por e-mail?",
        answer2:"Sim, se o e-mail for mesmo do IMREA. Sempre veja quem mandou antes de clicar."
    },
    {
        title:"Institucional",
        question: "1. O que é o IMREA?",
        answer:"É um instituto do Hospital das Clínicas que cuida da reabilitação de pacientes.",
        question2:"2. Quais lugares fazem parte do IMREA?",
        answer2:"Clínicas, Aclimação, Vila Mariana, Lapa e outros locais. Veja mais na parte de contatos."
    }

  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      {faqs.map((faq, i) => (
        <FAQItem key={i} title={faq.title} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
