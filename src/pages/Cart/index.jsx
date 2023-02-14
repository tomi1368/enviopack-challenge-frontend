import { FlexContainer } from "../../components/FlexContainer/style";
import { MainTitle } from "../../components/MainTitle/style";
import { CartBoldText, CartEmptyButton } from "./style";
import CardProduct from "./components/CardProduct/index";
import { connect, useDispatch } from "react-redux";
import { resetCart } from "../../store/actions/cart";
import { useNavigate } from "react-router-dom";
import { resetUpdateUser, updateUser } from "../../store/actions/user";
import { useEffect } from "react";
import { Button, Card } from "../../components/GlobalComponents/style";
const Component = ({ cart, userStates }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (userStates.success) {
      navigate("/purchase?state=success");
      dispatch(resetUpdateUser());
    }
    if (userStates.error) {
      navigate("/purchase?state=error");
      dispatch(resetUpdateUser());
    }
  }, [userStates]);
  return (
    <>
      <MainTitle>Carrito</MainTitle>
      <FlexContainer
        style={{ maxWidth: "700px", margin: "0 auto" }}
        direction="column"
        gap="10px"
      >
        <CartEmptyButton
          onClick={() => {
            dispatch(resetCart());
          }}
        >
          Reinciar Carrito
        </CartEmptyButton>
        {cart.products.map((product) => {
          return <CardProduct key={product.id} product={product}></CardProduct>;
        })}
        <Card>
          <FlexContainer
            style={{ width: "100%" }}
            justify="space-between"
            align="center"
          >
            <CartBoldText>Total</CartBoldText>
            <CartBoldText>{`$${cart.total}`}</CartBoldText>
          </FlexContainer>
        </Card>
        <FlexContainer
          style={{ marginTop: "20px" }}
          justify="space-between"
          align="center"
        >
          <Button
            onClick={() => {
              navigate("/list");
            }}
          >
            Volver al Catalogo
          </Button>
          {console.log(cart.products.length === 0)}
          <Button
            disabled={cart.products.length === 0}
            onClick={() => {
              dispatch(updateUser(cart));
            }}
          >
            Finalizar Compra
          </Button>
        </FlexContainer>
      </FlexContainer>
    </>
  );
};

const states = ({ cartStore, userStore }) => {
  const cart = cartStore.data;
  const { states: userStates } = userStore.update;
  return {
    cart,
    userStates,
  };
};

export default connect(states)(Component);
