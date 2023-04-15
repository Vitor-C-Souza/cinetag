import Banner from "components/Banner/index.js";
import Cabecalho from "components/Cabecalho/";
import Rodape from "components/Rodape/index.js";
import Titulo from "components/Titulo/index.js";
import React from "react";

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Rodape />
    </>
  );
}
