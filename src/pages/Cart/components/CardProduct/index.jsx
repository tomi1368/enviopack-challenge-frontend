import {
  CartProductImageWrapper,
  CartProductCardTitleText,
  CartProductTitle,
} from "../../style";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../../../store/actions/cart";
import { FlexContainer } from "../../../../components/FlexContainer/style";
import ProductImage from "../../../../assets/image-product.jpg";
import {
  Button,
  Card,
  Image,
} from "../../../../components/GlobalComponents/style";
const Component = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <FlexContainer align="center" gap="10px" justify="space-between">
        <CartProductImageWrapper>
          <Image src={ProductImage}></Image>
        </CartProductImageWrapper>
        <CartProductTitle>
          <FlexContainer
            style={{ width: "100%" }}
            justify="space-between"
            align="center"
          >
            <CartProductCardTitleText>{product.title}</CartProductCardTitleText>
            <FlexContainer align="center" gap="15px">
              <CartProductCardTitleText>
                {`$${product.price}`}
              </CartProductCardTitleText>
              <Button
                onClick={() => {
                  dispatch(removeProduct(product));
                }}
              >
                X
              </Button>
            </FlexContainer>
          </FlexContainer>
        </CartProductTitle>
      </FlexContainer>
    </Card>
  );
};

export default Component;
