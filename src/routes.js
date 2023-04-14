const { default: Inicio } = require("./pages/Inicio/index.js");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}