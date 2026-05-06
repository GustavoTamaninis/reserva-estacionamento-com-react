import { useState, useEffect } from 'react'
function Formulario(){

    const [vagas, setVagas] = useState([
        {"vaga": "01", "disponibilidade": "Ocupada"},
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
        if(Array.isArray(vagasArmazenadas)){
            setVagas(vagasArmazenadas);
        }else{
            localStorage.setItem("vagas", JSON.stringify(vagas));
        }
    }, []);

    const regexPlaca = /^[A-Z]{3}-?\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$/i;
    const regexNome = /^[a-záàâãéèêíïóôõöúçñ\s]{4,40}$/i;
    const regexAptoNum = /^\d{1,4}$/;
    const regexAptoBloco = /^[a-z0-9]{1,10}$/i;
    const regexModelo = /^[a-z0-9\s\-]{2,40}$/i;
    const regexCor = /^[a-záàâãéèêíïóôõöúçñ\s]{3,20}$/i;

    const [dados, setDados] = useState({
        placa: "",
        nome: "",
        aptoNum: "",
        aptoBloco: "",
        modelo: "",
        cor: "",
        vagaNum: "00"
    });

    const [dadosSalvos, setDadosSalvos] = useState([]);

    useEffect(() => {
        const pessoas = JSON.parse(localStorage.getItem("pessoas")) || [];
        setDadosSalvos(pessoas);
    }, []);

    const alterarDado = (e) => {
        setDados({
            ...dados,
            [e.target.name]: e.target.value
        });
    }

    function imprimirDado(d, c){
        console.log("Armazenado o dado " + d + " no campo " + c + ".");
    }

    const validarForm = (e, pos) => {
        if(!regexPlaca.test(dados.placa.trim())){
            alert("Erro! Preencha corretamente o campo Placa do Veículo.");
            e.preventDefault();
            return;
        }
        if(!regexNome.test(dados.nome.trim())){
            alert("Erro! Preencha corretamente o campo Nome do Proprietário.");
            e.preventDefault();
            return;
        }
        if(!regexAptoNum.test(dados.aptoNum.trim())){
            alert("Erro! Preencha corretamente o campo Número do Apartamento.");
            e.preventDefault();
            return;
        }
        if(!regexAptoBloco.test(dados.aptoBloco.trim())){
            alert("Erro! Preencha corretamente o campo Bloco do Apartamento.");
            e.preventDefault();
            return;
        }
        if(!regexModelo.test(dados.modelo.trim())){
            alert("Erro! Preencha corretamente o campo Modelo do Veículo.");
            e.preventDefault();
            return;
        }
        if(!regexCor.test(dados.cor.trim())){
            alert("Erro! Preencha corretamente o campo Cor do Veículo.");
            e.preventDefault();
            return;
        }
        if(dados.vagaNum.trim() == "00"){
            alert("Erro! Escolha o Número da Vaga de Estacionamento.");
            e.preventDefault();
            return;
        }

        const index = parseInt(dados.vagaNum.trim())-1;
        if(vagas[index].disponibilidade === "Ocupada"){
            alert("Erro! A vaga " + dados.vagaNum.trim() + " já está ocupada.");
            e.preventDefault();
            return;
        }

        const listaPessoas = [...dadosSalvos, dados];
        localStorage.setItem("pessoas", JSON.stringify(listaPessoas));
        setDadosSalvos(listaPessoas);

        imprimirDado(dados.placa.trim(), "Placa do Veículo");
        imprimirDado(dados.nome.trim(), "Nome do Proprietário");
        imprimirDado(dados.aptoNum.trim(), "Número do Apartamento");
        imprimirDado(dados.aptoBloco.trim(), "Bloco do Apartamento");
        imprimirDado(dados.modelo.trim(), "Modelo do Veículo");
        imprimirDado(dados.cor.trim(), "Cor do Veículo");
        imprimirDado(dados.vagaNum.trim(), "Número da Vaga de Estacionamento");

        const vagasAtualizadas = vagas.map((vaga, i) =>
            i === index ? { ...vaga, disponibilidade : "Ocupada"} : vaga
        );
        setVagas(vagasAtualizadas)
        localStorage.setItem("vagas", JSON.stringify(vagasAtualizadas));

        alert("Cadastro realizado com sucesso!");
    }

    return(
        <section className="cadastro">
            <form action="vagas" onSubmit={validarForm}>
                <h1>Reserve sua Vaga</h1>
                <legend>Preencha os Dados a seguir para reservar uma vaga:</legend>
                <div className="form-group">
                    <label htmlFor="idPlaca">Placa do veículo:</label>
                    <input type="text" name="placa" id="idPlaca" value={dados.placa} onChange={alterarDado} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="idNome">Nome do Proprietário:</label>
                    <input type="text" name="nome" id="idNome" value={dados.nome} onChange={alterarDado} maxLength="30" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="idAptoNum">Número do Apartamento:</label>
                    <input type="text" name="aptoNum" id="idAptoNum" value={dados.aptoNum} onChange={alterarDado} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="idAptoBloco">Bloco do apartamento:</label>
                    <input type="text" name="aptoBloco" id="idAptoBloco" value={dados.aptoBloco} onChange={alterarDado} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="idModelo">Modelo do Veículo:</label>
                    <input type="text" name="modelo" id="idModelo" value={dados.modelo} onChange={alterarDado} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="idCor">Cor do Veículo:</label>
                    <input type="text" name="cor" id="idCor" value={dados.cor} onChange={alterarDado} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="idVagaNum">Número da Vaga de Estacionamento:</label>
                    <select name="vagaNum" id="idVagaNum" value={dados.vagaNum} onChange={alterarDado} required>
                        <option value="00">Selecione uma Vaga</option>
                        <option value="01">Vaga 01</option>
                        <option value="02">Vaga 02</option>
                        <option value="03">Vaga 03</option>
                        <option value="04">Vaga 04</option>
                        <option value="05">Vaga 05</option>
                        <option value="06">Vaga 06</option>
                        <option value="07">Vaga 07</option>
                        <option value="08">Vaga 08</option>
                        <option value="09">Vaga 09</option>
                        <option value="10">Vaga 10</option>
                    </select>
                </div>
                <div className="button">
                    <button type="submit" id="btnSubmit">Salvar</button>
                </div>
            </form>
        </section>
    )
}

export default Formulario;