import React from "react";

import "./Create.css";
import GoBackButton from "../components/GoBack";

export default class Create extends React.Component {
  render() {
    return (
      <div
        id="newRegistry"
        className="createRegistry"
        tabIndex={this.props.tab}
      >
        <GoBackButton />
        <h3>Cadastrar informações </h3>
        <form>
          <div>
            <label for="personName">Nome da pessoa</label>
            <input name="personName" type="text" placeholder="Nome da pessoa" />
          </div>

          <div>
            <label for="personRegistry">CPF</label>
            <input
              name="personRegistry"
              type="text"
              placeholder="___.___.___-__"
            />
          </div>

          <div>
            <label for="vaccineName">Vacina aplicada</label>
            <input name="vaccineName" type="text" placeholder="Vacina" />
          </div>

          <div>
            <label for="applicationDate">Data de aplicação</label>
            <input name="applicationDate" type="date" value="2022-01-01" />
          </div>

          <div>
            <label for="packageNumber">Número do lote</label>
            <input name="packageNumber" type="number" placeholder="Lote" />
          </div>

          <div id="actions">
            <button type="submit">Criar cadastro</button>
            <button>Limpar formulário</button>
          </div>
        </form>
      </div>
    );
  }
}
