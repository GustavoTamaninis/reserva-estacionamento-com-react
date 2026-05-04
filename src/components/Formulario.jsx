function Formulario(){

    const validarForm = () => {

    }

    return(
        <form action="index.html" onSubmit={validarForm}>
            <h1>Reserve sua Vaga</h1>
            <legend>Preencha os Dados a seguir para reservar uma vaga:</legend>
            <div className="form-group">
                <label htmlFor="placa">Placa do veículo:</label>
                <input type="text" id="placa" required></input>
            </div>
            <div className="form-group">
                <label htmlFor="nome">Nome do Proprietário:</label>
                <input type="text" id="nome" maxLength="30" required></input>
            </div>
            <div className="form-group">
                <label htmlFor="apto_num">Número do Apartamento:</label>
                <input type="text" id="aptoNum" required></input>
            </div>
            <div className="form-group">
                <label htmlFor="apto_bloco">Bloco do apartamento:</label>
                <input type="text" id="aptoBloco" required></input>
            </div>
            <div className="form-group">
                <label htmlFor="modelo">Modelo do Veículo:</label>
                <input type="text" id="modelo" required></input>
            </div>
            <div className="form-group">
                <label htmlFor="cor">Cor do Veículo:</label>
                <input type="text" id="cor" required></input>
            </div>
            <div className="form-group">
                <label htmlFor="vaga">Número da Vaga de Estacionamento:</label>
                <select id="vaga" required>
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
    )
}

export default Formulario;