import { Routes, Route } from "react-router-dom";

import { Register } from "./pages/register";
import { Product } from "./pages/product";
import { ListProducts } from "./pages/listProducts";
import { Categories } from "./pages/categories";



import "bootstrap/dist/css/bootstrap.min.css";

function RoutesComponent() {
    return (
        <Routes>
          <Route path=":category/cadastro" element={<Register />} />
          <Route path="/adicionar-produto" element={<Product />} />
          <Route path="/listar-produtos" element={<ListProducts />} />
          <Route path="/" element={<Categories />} />
        </Routes>
    );
}

export { RoutesComponent };
