function Home(){
    return(
        <>
        <div className="min-h-screen flex flex-col">
        <h1 className="text-4xl text-black font-bold">
            Bem vindo ao NavegaHC
            <img src="/public/img/menina_home.png" alt="imagem de menina"/>
        </h1>
        <p className="text-base">
             O Navega HC é seu portal de apoio para facilitar as consultas de fisioterapia online do IMREA.
                        Aqui você encontra orientações simples, dicas para usar a tecnologia e ferramentas para
                        organizar seu tratamento. Tudo pensado para tornar sua experiência fácil, segura e eficiente,
                        ajudando você a cuidar da sua saúde com conforto e praticidade.
        </p>
        </div>
        </>
    );
}
export default Home;