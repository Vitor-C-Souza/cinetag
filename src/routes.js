import Cabecalho from "components/Cabecalho/index.js";
import Container from "components/Container/index.js";
import Favoritos from "pages/Favoritos/index.js";
import Rodape from "components/Rodape/index.js";
import FavoritosProvider from "Contextos/Favoritos.js";

const { default: Inicio } = require("./pages/Inicio/index.js");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}
