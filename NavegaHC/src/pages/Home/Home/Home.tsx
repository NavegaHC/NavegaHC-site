function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-200 rounded-2xl px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Bem-vindo ao <span className="text-[#092d5c]">NavegaHC</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            O <span className="font-semibold">Navega HC</span> é seu portal de apoio para facilitar as consultas de fisioterapia
            online do IMREA. Aqui você encontra orientações simples, dicas para usar a tecnologia e ferramentas
            para organizar seu tratamento.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tudo pensado para tornar sua experiência fácil, segura e eficiente, ajudando você a cuidar da sua
            saúde com conforto e praticidade.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/img/menina_home.png"
            alt="Ilustração de menina usando computador"
            className="max-w-xs md:max-w-md rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
