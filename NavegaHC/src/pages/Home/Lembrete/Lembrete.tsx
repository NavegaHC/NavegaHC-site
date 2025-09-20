import { useState } from "react"

const Lembrete = () => {
    const [nomeCompleto, setNome] = useState("");
    const [nomeExibido, setNomeExibido] = useState("");
    const [numTel, setTel] = useState("");
    const [numExibido, setNumExibido] = useState("");
    const [diaConsulta, setDia] = useState("");
    const [diaExibido, setDiaExibido] = useState("");
    const [horaConsulta, setHora] = useState("");
    const [horaExibido, setHoraExibido] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
        setTel(event.target.value);
        setDia(event.target.value);
        setHora(event.target.value);
    };

    const handleSubmit = () => {
        setNomeExibido(nomeCompleto);
        setNome("");
        setNumExibido(numTel);
        setTel("");
        setDiaExibido(diaConsulta);
        setDia("");
        setHoraExibido(horaConsulta);
        setHora("");
    };

    return(
        <>
        <div className="min-h-screen flex flex-col">
            <h1 className="font-bold"> Lembrete </h1>
            <form onSubmit={(e) => e.preventDefault}>
                <label>Nome Completo:
                    <input type="text" value={ nomeCompleto } onChange={ handleChange } />
                </label>
                <button type="button" onClick={handleSubmit}>Mostrar nome</button>
                <label>Número (Telefone):
                    <input type="num" value={ numTel} onChange={handleChange} />
                </label>
               <button type="button" onClick={handleSubmit}>Mostrar telefone0</button>
                <label>Dia da consulta:
                    <input type="date" value={ diaConsulta } onChange={handleChange} />
                </label>
                <button type="button" onClick={handleSubmit}>Mostrar dia</button>
                <label>Hora da consulta:
                    <input type="time" value= { horaConsulta } onChange={handleChange} />
                </label>
                <button type="button" onClick={handleSubmit}>Mostrar hora</button>
            </form>
            {nomeExibido && <p><b>Nome digitado</b>: {nomeExibido} </p>}
            {numExibido && <p><b>Telefone digitado</b>: {numExibido} </p>}
            {diaExibido && <p><b>Dia digitado</b>: {diaExibido} </p>}
            {horaExibido && <p><b>Horário digitado</b>: {horaExibido} </p>}
        </div>
        </>
    );
}
export default Lembrete;
