import { Routes, Route } from "react-router-dom";

import { Register } from "./pages/register";
import { Product } from "./pages/product";
import { ListProducts } from "./pages/listProducts";
import { Categories } from "./pages/categories";
import { StartCollect } from "./pages/startCollect";
import { TableCollects } from "./pages/tableCollects";
import { ListCategoriesCollect } from "./pages/listCategoriesCollect";
import { ListCollect } from "./pages/listCollect";



import "bootstrap/dist/css/bootstrap.min.css";

function RoutesComponent() {
    return (
        <Routes>
          <Route path=":category/:collect/cadastro" element={<Register />} />
          <Route path=":category/:collect/cadastro/:finished" element={<Register />} />
          <Route path=":category/:collect/adicionar-produto/:ean" element={<Product />} />
          <Route path=":category/:collect/listar-produtos" element={<ListProducts />} />
          <Route path=":category/iniciar-coleta" element={<StartCollect />} />
          <Route path=":category/coletas/:collect" element={<TableCollects />} />
          <Route path="listar-categorias-coletas" element={<ListCategoriesCollect />} />
          <Route path=":category/listar-coletas" element={<ListCollect />} />

          <Route path="/" element={<Categories />} />
        </Routes>
    );
}

export { RoutesComponent };
