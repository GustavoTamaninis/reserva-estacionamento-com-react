import { useEffect, useState } from 'react'
function ListarVagas(){
    const [vagas, setVagas] = useState([
        {"vaga": "01", "disponibilidade": "Disponível"},
        {"vaga": "02", "disponibilidade": "Disponível"},
        {"vaga": "03", "disponibilidade": "Disponível"},
        {"vaga": "04", "disponibilidade": "Disponível"},
        {"vaga": "05", "disponibilidade": "Disponível"},
        {"vaga": "06", "disponibilidade": "Disponível"},
        {"vaga": "07", "disponibilidade": "Disponível"},
        {"vaga": "08", "disponibilidade": "Disponível"},
        {"vaga": "09", "disponibilidade": "Disponível"},
        {"vaga": "10", "disponibilidade": "Disponível"}
    ]);

    useEffect(() => {
        const vagasArmazenadas = JSON.parse(localStorage.getItem("vagas"));
        if(Array.isArray(vagasArmazenadas   )){
            setVagas(vagasArmazenadas);
        }else{
            localStorage.setItem("vagas", JSON.stringify(vagas));
        } 
    }, []);

    return(
        <section>
            <h1>Vagas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Vaga</th>
                        <th>Disponibilidade</th>
                    </tr>
                </thead>
                <tbody>
                    {vagas.map((vaga, index) => (
                        <tr key={index}>
                            <th>{vaga.vaga}</th>
                            <th>{vaga.disponibilidade}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default ListarVagas;