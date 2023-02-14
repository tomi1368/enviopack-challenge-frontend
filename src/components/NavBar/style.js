import styled from "styled-components";

export const NavBarWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  background-color: #000;
`;

export const NavItems = styled("div")`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
`;

export const NavItemLabel = styled("span")`
  color: #fff;
  font-size: 14px;
`;

export const SemiBoldLabel = styled("div")`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
