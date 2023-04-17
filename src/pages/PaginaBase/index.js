import Cabecalho from "components/Cabecalho/index.js";
import React from "react";
import FavoritosProvider from "Contextos/Favoritos.js";
import Container from "components/Container/index.js";
import { Outlet } from "react-router-dom";
import Rodape from "components/Rodape/index.js";

export default function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Rodape />
    </main>
  );
}
