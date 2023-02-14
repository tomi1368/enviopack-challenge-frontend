import styled from "styled-components";

export const Button = styled("button")`
  &:disabled {
    background-color: #f2f2f2;
    color: #000;
    cursor: not-allowed;
  }
  display: flex;
  color: #fff;
  background-color: #000;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  font-size: 13px;
  padding: 8px;
`;

export const Card = styled("div")`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  position: relative;
  padding: 10px 10px 15px 10px;
`;

export const Image = styled("img")`
  height: 100%;
  widht: 100%;
  object-fit: cover;
`;
