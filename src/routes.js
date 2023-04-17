import Favoritos from "pages/Favoritos/index.js";
import Player from "pages/Player/index.js";
import NaoEncontrado from "pages/NaoEncontrado/index.js";
import PaginaBase from "pages/PaginaBase/index.js";

const { default: Inicio } = require("./pages/Inicio/index.js");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
