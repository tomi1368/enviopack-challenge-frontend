import { SemiBoldLabel, NavBarWrapper, NavItems, NavItemLabel } from "./style";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
const Component = ({ user, shopCart }) => {
  const navigate = useNavigate();
  return (
    <NavBarWrapper>
      <SemiBoldLabel
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/list");
        }}
      >
        Tienda de Productos
      </SemiBoldLabel>
      <NavItems>
        <NavItemLabel>{!!user ? `${user.username}` : "Guess"}</NavItemLabel>
        <SemiBoldLabel
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/cart");
          }}
        >{`Carrito(${
          !!shopCart.products && shopCart.products.length
        })`}</SemiBoldLabel>
        <NavItemLabel>{`Credito: $${
          !!user ? user.credit : "Not avaliable"
        }`}</NavItemLabel>
      </NavItems>
    </NavBarWrapper>
  );
};

const states = ({ userStore, cartStore }) => {
  const { data: user } = userStore.all;
  const { data: shopCart } = cartStore;
  return {
    user,
    shopCart,
  };
};

export default connect(states)(Component);
