import Banner from "components/Banner/index.js";
import Cabecalho from "components/Cabecalho/";
import Rodape from "components/Rodape/index.js";
import React from "react";

export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Rodape />
    </>
  );
}
