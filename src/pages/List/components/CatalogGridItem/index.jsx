import {
  ProductCard,
  ProductImageWrapper,
  ProductTitle,
  ProductPrice,
  ProductButton,
} from "../../style";
import { FlexContainer } from "../../../../components/FlexContainer/style";
import { Image } from "../../../../components/GlobalComponents/style";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../../store/actions/cart";
import ProductImage from "../../../../assets/image-product.jpg";
const Component = ({ catalogItem, cartProducts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <ProductCard key={catalogItem.id}>
      <FlexContainer
        style={{ height: "100%" }}
        justify="space-between"
        direction="column"
        gap="10px"
      >
        <ProductImageWrapper>
          <Image src={ProductImage}></Image>
        </ProductImageWrapper>
        <ProductTitle>{catalogItem.title}</ProductTitle>
        <ProductPrice>{`$${catalogItem.price}`}</ProductPrice>
        <ProductButton
          onClick={() => {
            if (
              !!cartProducts.find(
                (cartProduct) => cartProduct.id === catalogItem.id
              )
            ) {
              navigate("/cart");
            } else {
              dispatch(addProduct(catalogItem));
            }
          }}
        >{`${
          !!cartProducts.find(
            (cartProduct) => cartProduct.id === catalogItem.id
          )
            ? "Ir al Carro"
            : "Añadir al carro"
        }`}</ProductButton>
      </FlexContainer>
    </ProductCard>
  );
};

export default Component;
