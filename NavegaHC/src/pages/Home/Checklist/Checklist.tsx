function Checklist(){
    return(
        <>
        <div className="min-h-screen flex flex-col">
        <h1 className="text-4xl text-black font-bold">
            Checklist para sua Consulta de Fisioterapia - IMREA 
        </h1>
        <form>
                        <div>
                            <label> Escolha um local bem iluminado e silencioso.</label>
                        <div>
                            <label> Certifique-se de que há espaço para movimentação.</label>
                        </div>
                        <div>
                            <label> Tenha uma cadeira ou colchonete, conforme necessário.</label>
                        </div>
                        <div>
                            <label> Verifique se sua câmera e microfone estão funcionando.</label>
                        </div>
                        <div>
                            <label> Mantenha sua internet estável.</label>
                        </div>
                    </div>
                </form>
        </div>
        </>
        );
}
export default Checklist;