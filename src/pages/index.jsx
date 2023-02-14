import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import GetData from "../components/GetData";
import Layout from "../components/Layout/index";
import List from "./List";
import Cart from "./Cart";
import Purchase from "./Purchase";
const Component = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <GetData>
              <Layout></Layout>
            </GetData>
          }
        >
          <Route index element={<Navigate to={"/list"}></Navigate>}></Route>
          <Route path="list" element={<List></List>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="purchase" element={<Purchase></Purchase>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Component;
