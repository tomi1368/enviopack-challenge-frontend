import styled from "styled-components";

export const ProductCard = styled("div")`
  padding: 20px;
  box-shadow: 3px 3px 6px 0 rgba(112, 112, 112, 0.16);
  border: 1px solid #000;
`;

export const ProductImageWrapper = styled("div")`
  height: 12rem;
`;

export const ProductTitle = styled("h3")`
  font-size: 15px;
  text-align: center;
`;

export const ProductPrice = styled("h4")`
  font-size: 13px;
  text-align: center;
`;

export const ProductButton = styled("button")`
  width: 100%;
  text-align: center;
  background: #000;
  color: #fff;
  padding: 8px 0px;
`;

export const NotFoundProductTitle = styled("h2")`
  font-size: 17px;
  text-align: center;
`;
