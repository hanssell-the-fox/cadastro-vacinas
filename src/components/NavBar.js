import React from "react";
import "./NavBar.css";

import Button from "./Button";
import seringe from "../images/seringe.png";
import scroll from "../images/scroll.png";
import search from "../images/searching.png";

function createRegistry() {
  const screen = document.getElementById("newRegistry");
  screen.focus();
  console.log(screen);
}

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navBar">
        <ul>
          <Button
            icon={seringe}
            title="Cadastrar"
            alt="Ilustração de uma seringa"
            description="Realizar um cadastro"
            onClick={createRegistry}
          />

          <Button
            icon={scroll}
            alt="Ilustração de um pergaminho"
            title="Ver tudo"
            description="Listar todas as pessas vacinadas"
            // onClick={Events.listAll}
          />

          <Button
            icon={search}
            alt="Ilustração de uma lupa"
            title="Encontrar"
            description="Buscar por uma pessoa cadastrada"
            // onClick={Events.searchFor}
          />
        </ul>
      </nav>
    );
  }
}
