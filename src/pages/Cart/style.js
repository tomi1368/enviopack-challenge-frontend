import styled from "styled-components";

export const CartProductImageWrapper = styled("div")`
  height: 50px;
  width: 60px;
`;

export const CartEmptyButton = styled("button")`
  background-color: #f2f2f2;
  width: 150px;
  align-self: flex-end;
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
`;

export const CartProductTitle = styled("div")`
  background-color: #f2f2f2;
  min-height: 50px;
  position: relative;
  width: 100%;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: -7px;
    background-color: #fff;
    width: 10px;
    height: 100%;
    border-radius: 10px;
  }
`;

export const CartProductCardTitleText = styled("h3")`
  font-size: 14px; ;
`;

export const CartBoldText = styled("h3")`
  font-weight: bold;
  font-size: 15px;
`;
