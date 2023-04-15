import Cabecalho from "components/Cabecalho/index.js";
import Container from "components/Container/index.js";
import Favoritos from "components/Favoritos/index.js";
import Rodape from "components/Rodape/index.js";

const { default: Inicio } = require("./pages/Inicio/index.js");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}
