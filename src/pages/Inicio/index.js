import Banner from "components/Banner/index.js";
import Cabecalho from "components/Cabecalho/";
import Card from "components/Card/index.js";
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
      <Card id='1' titulo='Goku' capa='https://i.pinimg.com/564x/c7/4c/a6/c74ca6827eed655aa080143a0970242f.jpg' />
      <Rodape />
    </>
  );
}
